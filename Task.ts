type TaskStatus = "todo" | "in-progress" | "done";
class Task {
  description: string;
  id: number;
  status: TaskStatus;
  createdAt: Date;
  updatedAt: Date;

  constructor(description: string, id: number) {
    this.description = description;
    this.createdAt = new Date();
    this.id = id;
    this.updatedAt = new Date();
    this.status = "todo";
  }

  start() {
    this.status = "in-progress";
    this.updatedAt = new Date();
  }

  finish() {
    this.status = "done";
    this.updatedAt = new Date();
  }
}

export default Task;
