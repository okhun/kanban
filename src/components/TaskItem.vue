<template>
    <li class="bg-white rounded p-3 mb-3 shadow">
      <h3>{{ task?.title }}</h3>
      <p>{{ task?.description }}</p>
      <p v-if="task?.attachment">Attached: {{ task?.attachment }}</p>
     <div class="d-flex justify-content-between" > 
        <b-button @click="deleteTask" variant="danger" >Delete</b-button></div>
    </li>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits,  } from 'vue';
import { Task } from '../type';
  
  const props = defineProps<{task:Task}>();
  
  const emit = defineEmits(['deleteTask',]);

  function deleteTask() {
    emit('deleteTask', props.task?.id);
  }
     
  </script>
  
  <style scoped>
  /* .task-item {
    padding: 15px;
    background: #fff;
    border-radius: 8px;
    margin-bottom: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  } */
  </style>
  