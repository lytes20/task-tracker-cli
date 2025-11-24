import readline from "node:readline/promises";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks: string[] = [];

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

const prompt1Reply = await rl.question(prompt1);
switch (prompt1Reply) {
  case "1":
    const task = await rl.question("Please enter task");
    tasks.push(task);
    break;
  case "2":
    break;
  default:
    console.log("Invalid input please try again");
}
function viewTasks() {
  console.log("Here are your tasks for the day: ");
  for (let i = 0; i < tasks.length; i++) {
    console.log("-", tasks[i]);
  }
}
rl.close();
