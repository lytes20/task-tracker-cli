import { readFile, writeToFile } from "./services.js";
import Task from "./Task.js";

// Create a task
async function createTask(desc: string): Promise<string> {
  const tasks: Task[] = await readFile();
  const newTask = new Task(desc, tasks.length + 1);
  tasks.push(newTask);
  await writeToFile(tasks);
  return `Task added successfully (ID: ${newTask.id})`;
}

// View Tasks
async function viewTasks() {
  const tasks: Task[] = await readFile();
  console.log("tasks", tasks);
}

// Edit a task description
async function editTask(taskId: string, desc: string) {
  const tasks: Task[] = await readFile();
  const taskToEdit = tasks.find((task) => task.id == Number(taskId));
  taskToEdit.description = desc;
  await writeToFile(tasks);
}

// Start a task
async function startTask(taskId: string) {
  const tasks: Task[] = await readFile();
  const task = tasks.find((t) => t.id == Number(taskId));
  task.start();
  await writeToFile(tasks);
}

// Finish a task
async function finishTask(taskId: string) {
  const tasks: Task[] = await readFile();
  const task = tasks.find((t) => t.id == Number(taskId));
  task.finish();
  await writeToFile(tasks);
}

// Delete a task
async function deleteTask(taskId: string) {
  const tasks: Task[] = await readFile();
  const taskIndex = tasks.findIndex((t) => t.id == Number(taskId));
  tasks.splice(taskIndex, 1);
  await writeToFile(tasks);
}
export { createTask, viewTasks, editTask, startTask, finishTask, deleteTask };
