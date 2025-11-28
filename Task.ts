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

  static fromJSON(obj: any): Task {
    const task = new Task(obj.description, obj.id);
    task.status = obj.status;
    task.createdAt = new Date(obj.createdAt);
    task.updatedAt = new Date(obj.updatedAt);
    return task;
  }

  start() {
    this.status = "in-progress";
    this.updatedAt = new Date();
  }

  finish() {
    this.status = "done";
    this.updatedAt = new Date();
  }

  toString(): string {
    return `Task ${this.id}: desc: ${this.description}, status: ${this.status}`;
  }
}

export default Task;
