import fs from "fs/promises";
import Task from "./Task.js";
const FILE_PATH = "tasks.json";

// Write to the file
async function writeToFile(tasks: Task[]) {
  await fs.writeFile(FILE_PATH, JSON.stringify(tasks, null, 2), "utf-8");
}

// Read from the file
async function readFile(): Promise<Task[]> {
  const data = await fs.readFile(FILE_PATH, "utf-8");
  return JSON.parse(data).map(Task.fromJSON);
}

export { readFile, writeToFile };
