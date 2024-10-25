<template>
    <form @submit.prevent="submitTask" class="d-flex flex-column gap-3 shadow p-3">
      <b-form-input v-model="title" placeholder="Task Title" required />
      <b-form-textarea v-model="description" placeholder="Task Description"></b-form-textarea>
      <input type="file" @change="attachFile" />
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <b-button variant="primary" type="submit">Add Task</b-button>
    </form>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue';
import { Status } from '../type';
  
  const title = ref('');
  const description = ref('');
  const attachment = ref(null);
  const options=ref( [
          { value:Status.ToDo, text: 'To do' },
          { value: Status.InProgress, text: 'In progress' },
          { value: Status.Done, text: 'Done', }
        ])
  const selected=ref(Status.ToDo)

  const emit = defineEmits(['createTask']);
  
  function attachFile(event:any) {
    attachment.value = event.target.files[0].name||null;
  }
  
  function submitTask() {
    if (title.value.trim()) {
      emit('createTask', {
        id: Date.now().toString(),
        title: title.value,
        description: description.value,
        attachment: attachment.value,
        status:selected.value
      });
  
      // Reset form
      title.value = '';
      description.value = '';
      attachment.value = null;
      selected.value=Status.ToDo
    }
  }
  </script>

  