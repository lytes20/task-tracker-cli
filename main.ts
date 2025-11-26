import readline from "node:readline/promises";
import Task from "./Task";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks: Task[] = [];

console.log("----- Task Tracker ----");
console.log("Welcome to task tracker application");
const prompt1 = `
    Here is a list of things you can do:
    1. Create a task
    2. View tasks
    3. Edit a task
    4. Delete a task
    Please enter a number of an action you want to accomplish today(For example enter number 1 to create a task):
    `;

async function handlePrompting() {
  const prompt1Reply = await rl.question(prompt1);
  switch (prompt1Reply) {
    case "1":
      const description = await rl.question("Please enter task: \n");
      const newTask = new Task(description, tasks.length + 1);
      tasks.push(newTask);
      console.log(`Task added successfully (ID: ${newTask.id})`);
      viewTasks();
      break;
    case "2":
      viewTasks();
      break;
    case "3":
      const taskId = await rl.question("Enter task ID: ");
      const newTaskDescription = await rl.question(
        "Enter new task description: "
      );
      const taskToEdit = tasks.find((task) => task.id == Number(taskId));
      taskToEdit.description = newTaskDescription;
      viewTasks();
      break;
    default:
      console.log("Invalid input");
      rl.close();
  }
}
handlePrompting();

async function viewTasks() {
  console.log("Here are your tasks for the day: ");
  for (let i = 0; i < tasks.length; i++) {
    console.log("-", tasks[i]);
  }
  let continuePrompt = await rl.question("Would you like to continue? Y/N");
  continuePrompt.toLowerCase();
  if (continuePrompt === "yes" || continuePrompt === "y") {
    handlePrompting();
  } else {
    rl.close();
  }
}
