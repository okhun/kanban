import { defineStore } from "pinia"
import { Status, Task } from "../type"

const apiUrl='http://localhost:3000/tasks'
export const useTaskStore = defineStore('task', {
    state: () => ({ tasks:[] as Task[] }),
    getters: {
        todo: (state) => state.tasks.filter((el)=>el.status===Status.ToDo),
        progress: (state) => state.tasks.filter((el)=>el.status===Status.InProgress),
        done: (state) => state.tasks.filter((el)=>el.status===Status.Done),
    },
    actions: {
     async fetchTasks() {
        try {
            const response = await fetch(apiUrl);
           this.tasks = await response.json();
          } catch (error) {
            console.error("Error fetching tasks:", error);
          }
      },
      async createTask(task: Task) {
        try {
            const response = await fetch(apiUrl, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(task)
            });
            const createdTask = await response.json();
            this.tasks.push(createdTask);
          } catch (error) {
            console.error("Error adding task:", error);
          }
      },
      async deleteTask(taskId: string){
        try {
            await fetch(`${apiUrl}/${taskId}`, { method: 'DELETE' });
            this.tasks = this.tasks.filter(task => task.id !== taskId);
          } catch (error) {
            console.error("Error deleting task:", error);
          }
      }
    },
  })