export interface Task {
    id: string;
    title: string;
    description: string;
    attachment:string;
    status: Status;
  }
  
 export enum Status {
    ToDo = "to_do",
    InProgress = "in_progress",
    Done = "done"
  }