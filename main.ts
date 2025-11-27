import readline from "node:readline/promises";

import {
  createTask,
  deleteTask,
  editTask,
  finishTask,
  startTask,
  viewTasks,
} from "./utils";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("----- Task Tracker ----");
console.log("Welcome to task tracker application");
const prompt = `
Here is a list of things you can do:
1. Create a task
2. View tasks
3. Edit a task
4. Start a task
5. Finish a task
6. Delete a task
7. Exit
Please enter a number of an action you want to accomplish today(For example enter number 1 to create a task):
`;

async function main() {
  let running = true;
  while (running) {
    const action = await rl.question(prompt);
    switch (action) {
      case "1":
        const desc = await rl.question("Enter task: ");
        createTask(desc);
        break;
      case "2":
        viewTasks();
        break;
      case "3": {
        const taskId = await rl.question("Enter task ID: ");
        const newTaskDescription = await rl.question(
          "Enter new task description: "
        );
        editTask(taskId, newTaskDescription);
        break;
      }

      case "4": {
        const taskId = await rl.question("Enter task ID: ");
        startTask(taskId);
        break;
      }

      case "5": {
        const taskId = await rl.question("Enter task ID: ");
        finishTask(taskId);
        break;
      }
      case "6": {
        const taskId = await rl.question("Enter task ID: ");
        deleteTask(taskId);
        break;
      }
      case "7":
        rl.close();
        break;
      default:
        console.log("Invalid input. Try again");
    }
  }
  rl.close();
}
main();
