import express from 'express';

const app = express();

app.use(express.json());

let tasks = [];

/* Post */
app.post('/tasks', (req, res) => {
  const { title } = req.body;

  if (!title) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  const newTask = {
    id: Date.now(),
    title
  };

  tasks.push(newTask);

  res.status(201).json({
    message: "Task created successfully",
    data: newTask
  });
});

/* Get */
app.get('/tasks', (req, res) => {
  res.json({
    message: "Tasks fetched successfully",
    data: tasks
  });
});

/* Put  */
app.put('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);
  const { title } = req.body;

  const task = tasks.find(t => t.id === id);

  if (!task) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  if (!title) {
    return res.status(400).json({
      message: "Title is required"
    });
  }

  task.title = title;

  res.json({
    message: "Task updated successfully",
    data: task
  });
});

/* Delet */
app.delete('/tasks/:id', (req, res) => {
  const id = Number(req.params.id);

  const taskExists = tasks.find(t => t.id === id);

  if (!taskExists) {
    return res.status(404).json({
      message: "Task not found"
    });
  }

  tasks = tasks.filter(t => t.id !== id);

  res.json({
    message: "Task deleted successfully"
  });
});

export default app;