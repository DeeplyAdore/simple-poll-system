<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="card flex justify-content-center">
    <form @submit="onSubmit" class="flex flex-column align-items-center gap-2">
      <template v-for="item in items" :key="item.id">
        <input
          :modelValue="item"
    :id="id"
    :name="id"
    v-model="value"
    :class="{ 'p-invalid': errorMessage }"
    aria-describedby="text-error"
  />
  <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
      </template>

      <Button type="submit" label="Submit" />
    </form>
    <Toast />
  </div>
</template>

<script setup lang="ts">
import { IPoll } from '@/models/poll';
import { useForm } from 'vee-validate';
import { useToast } from 'primevue/usetoast';
import { inject, ref } from 'vue';
import { APIService } from '@/services/APIService';

const toast = useToast();
const props = defineProps(['modelValue']);
  const id = ref(props.modelValue.id);
const items = ref(props.modelValue);
  const { value, errorMessage } = useField<string>(id.value, validateField);
const apiService = inject<APIService>('APIService')!;

const { handleSubmit } = useForm();

const onSubmit = handleSubmit(async (values) => {
  const poll: IPoll = {
    pollName: 'Poll1',
    pollItems: Object.entries(values).map((p: [string, string]) => [p[0], p[1]])
  };
  await apiService.addPoll(poll);
  toast.add({
    severity: 'success',
    summary: 'Success',
    detail: 'Your vote has been submitted.',
    life: 3000
  });
});
  function validateField(value: string) {
  if (!value) {
    return `This question is required.`;
  }
  return true;
}
</script>

<style scoped></style>
