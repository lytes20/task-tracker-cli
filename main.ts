import readline from "node:readline/promises";
import Task from "./Task";
import { createTask, editTask, viewTasks } from "./utils";
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
4. Delete a task
5. Exit
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
      case "3":
        const taskId = await rl.question("Enter task ID: ");
        const newTaskDescription = await rl.question(
          "Enter new task description: "
        );
        editTask(taskId, newTaskDescription);
        break;
      case "4":
        // TODO: Delete task
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid input. Try again");
    }
  }
  rl.close();
}
main();
