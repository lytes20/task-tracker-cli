import Task from "./Task";

const tasks: Task[] = [];

// Create a task
function createTask(desc: string) {
  const newTask = new Task(desc, tasks.length + 1);
  tasks.push(newTask);
  console.log(`Task added successfully (ID: ${newTask.id})`);
}

// View Tasks
function viewTasks() {
  for (let i = 0; i < tasks.length; i++) {
    console.log("-" + tasks[i]);
  }
}

// Edit a task description
function editTask(taskId: string, desc: string) {
  const taskToEdit = tasks.find((task) => task.id == Number(taskId));
  taskToEdit.description = desc;
}

// Start a task
function startTask(taskId: string) {
  const task = tasks.find((t) => t.id == Number(taskId));
  task.start();
}

function finishTask(taskId: string) {
  const task = tasks.find((t) => t.id == Number(taskId));
  task.finish();
}

function deleteTask(taskId: string) {
  const taskIndex = tasks.findIndex((t) => t.id == Number(taskId));
  tasks.splice(taskIndex, 1);
}
export { createTask, viewTasks, editTask, startTask, finishTask, deleteTask };
