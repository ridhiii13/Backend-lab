// todo-api-express.js
const express = require("express");
const app = express();
const PORT = 3000;

let todos = []; // In-memory todo list

app.use(express.json());

// Get all todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

// Add a new todo
app.post("/todos", (req, res) => {
  const { task } = req.body;
  if (!task) {
    return res.status(400).json({ error: "Task is required" });
  }
  const newTodo = { id: todos.length + 1, task };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Update a todo
app.put("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { task } = req.body;
  const todo = todos.find((t) => t.id === id);

  if (!todo) {
    return res.status(404).json({ error: "Todo not found" });
  }

  todo.task = task || todo.task;
  res.json(todo);
});

// Delete a todo
app.delete("/todos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const initialLength = todos.length;
  todos = todos.filter((t) => t.id !== id);

  if (todos.length === initialLength) {
    return res.status(404).json({ error: "Todo not found" });
  }

  res.json({ message: "Todo deleted" });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Express server running at http://localhost:${PORT}`);
});
