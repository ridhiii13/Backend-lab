// index.js
const express = require("express");
const http = require("http");

const app = express();
const PORT = 3000;

// Middleware to parse JSON
app.use(express.json());

// In-memory to-do list
let todos = [];

// Routes

// Get all todos
app.get("/api/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/api/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = { id: Date.now(), task, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo by ID
app.put("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const { task, completed } = req.body;

  const todo = todos.find((t) => t.id == id);
  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  if (task !== undefined) todo.task = task;
  if (completed !== undefined) todo.completed = completed;

  res.json(todo);
});

// Delete a todo by ID
app.delete("/api/todos/:id", (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex((t) => t.id == id);

  if (index === -1) {
    return res.status(404).json({ error: "Todo not found" });
  }

  const deleted = todos.splice(index, 1);
  res.json({ message: "Todo deleted", deleted });
});

// Create HTTP server with express
const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
