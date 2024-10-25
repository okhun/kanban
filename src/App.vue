<template>
  <div id="app" class="d-flex flex-column align-items-center p-5">
    <h1>Kanban Board</h1>
    <TaskForm @createTask="createTask" />
    <div class="d-flex mt-5 w-100 gap-4 justify-content-center">
      <TaskList title="To Do" :tasks="todo" @deleteTask="deleteTask"  />
      <TaskList title="In progress" :tasks="progress" @deleteTask="deleteTask" />
      <TaskList title="Done" :tasks="done" @deleteTask="deleteTask" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {  onMounted,  } from 'vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';
import {useTaskStore} from './store'
import { storeToRefs } from 'pinia';

const store=useTaskStore()
const {done,progress,todo}=storeToRefs(store)
const {fetchTasks,createTask,deleteTask}=store

onMounted(fetchTasks);
</script>

