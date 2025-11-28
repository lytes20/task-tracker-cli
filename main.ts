#! /usr/bin/env node
import { program } from "commander";

import {
  createTask,
  deleteTask,
  editTask,
  filterTasksByStatus,
  finishTask,
  startTask,
  getTasks,
} from "./utils.js";
import Task from "./Task.js";

// Add a task
program
  .command("add <description>")
  .description("Adds a new task")
  .action(async (description) => {
    const response: string = await createTask(description);
    console.log(response);
  });

// View all tasks, view tasks by status
program
  .command("list")
  .argument("[status]", "Task status")
  .description("View all tasks, filter tasks by status")
  .action(async (status) => {
    if (!status) {
      const tasks: Task[] = await getTasks();
      console.log(tasks);
    }
    const allowed = ["todo", "in-progress", "done"];
    if (!allowed.includes(status)) {
      console.error(
        `Invalid status: ${status}. Choose one of: ${allowed.join(", ")}`
      );
      process.exit(1);
    }
    const tasks: Task[] = await filterTasksByStatus(status);
    console.log(tasks);
  });

// Edit a task
program
  .command("update <taskId> <newDescription>")
  .description("Edit a task")
  .action(async (taskId, newDescription) => {
    const response: string = await editTask(taskId, newDescription);
    console.log(response);
  });

// Start a task(Mark a task to be in progress)
program
  .command("mark-in-progress <taskId>")
  .description("Start a task")
  .action(async (taskId) => {
    const response: string = await startTask(taskId);
    console.log(response);
  });

// Finish a task(Mark a task as done)
program
  .command("mark-done <taskId>")
  .description("Finish a task")
  .action(async (taskId) => {
    const response: string = await finishTask(taskId);
    console.log(response);
  });

// Delete a task by id
program
  .command("delete <taskId>")
  .description("Finish a task")
  .action(async (taskId) => {
    const response: string = await deleteTask(taskId);
    console.log(response);
  });
program.parse(process.argv);
