<template>
  <Form :modelValue="items"></Form>
  <hr />
</template>

<script setup lang="ts">
import Form from '@/components/form/Form.vue';
import { ref } from 'vue';
import { IItem } from '@/models/item';

const templateItems: IItem[] = [
  {
    id: 'q1',
    title: 'What is your favorite pet?',
    options: ['Cats', 'Dogs', 'Birds']
  }
];
const items = ref(templateItems);
</script>

<style scoped></style>
