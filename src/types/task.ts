
export type TaskStatus = "todo" | "in-progress" | "completed";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  deadline?: Date;
  priority: "low" | "medium" | "high";
}

export interface Column {
  id: TaskStatus;
  title: string;
  tasks: Task[];
}
