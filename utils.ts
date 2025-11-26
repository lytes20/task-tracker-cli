import Task from "./Task";

const tasks: Task[] = [];

async function createTask(desc: string) {
  const newTask = new Task(desc, tasks.length + 1);
  tasks.push(newTask);
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

async function viewTasks() {
  for (let i = 0; i < tasks.length; i++) {
    console.log("-" + tasks[i]);
  }
}

async function editTask(taskId: string, desc: string) {
  const taskToEdit = tasks.find((task) => task.id == Number(taskId));
  taskToEdit.description = desc;
}
export { createTask, viewTasks, editTask };
