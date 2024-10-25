<template>
    <div class=" p-4 bg-light rounded" style="width: 350px;">
      <h2>{{ title }}</h2>
      <ul>
        <TaskItem
          v-for="task in tasks"
          :key="task.id"
          :task="task"
          @deleteTask="deleteTask"
        />
      </ul>
    </div>
  </template>
  
  <script setup lang="ts">
  import TaskItem from './TaskItem.vue';
  import { defineProps, defineEmits } from 'vue';
  import { Task } from '../type';
  
 defineProps<{tasks:Task[],title:string}>();
  
  const emit = defineEmits(['deleteTask',]);
  
  function deleteTask(taskId: any) {
    emit('deleteTask', taskId);
  }
  </script>
  

  