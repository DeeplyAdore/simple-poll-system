<template>
  <SelectButton
    :id="id"
    :name="id"
    v-model="value"
    :class="{ 'p-invalid': errorMessage }"
    aria-describedby="text-error"
    :options="options"
  />
  <small id="text-error" class="p-error">{{ errorMessage || '&nbsp;' }}</small>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps(['modelValue']);
const id = ref(props.modelValue.id);
const options = ref(props.modelValue.options);

const { value, errorMessage } = useField<string>(id.value, validateField);

function validateField(value: string) {
  if (!value) {
    return `This question is required.`;
  }
  return true;
}
</script>

<style scoped></style>
