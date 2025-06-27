const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const app = express();

app.use(cors());
app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const todos = [
    {
        id: uuidv4(),
        title: 'Finish hw23.1',
        description: 'Complete the task and push the changes to GitHub',
        checked: false
    },
    {
        id: uuidv4(),
        title: 'Gym session',
        description: 'Upper body workout',
        checked: true
    },
    {
        id: uuidv4(),
        title: 'Finish book chapter',
        description: 'Read and complete the current chapter',
        checked: false
    },
    {
        id: uuidv4(),
        title: 'English speaking practice',
        description: 'Call with a native speaker',
        checked: true
    }
]


app.get('/todos', (req, res) => {
    if (!todos || todos.length === 0) {
        return res.status(404).json({ error: 'ToDos not found' });
    }

    res.json(todos);
})

app.get('/todos/:id', (req, res) => {
    const todo = todos.find(todos => todos.id === req.params.id);

    if (!todo) {
        return res.status(404).json({ error: 'ToDo not found'})
    }

    res.json(todo);

})

app.post('/todos', (req, res) => {
    const { title, description } = req.body;

    if (!title) {
        return res.status(400).json({ error: 'Title is required' });
    }

    const newTodo = {
        id: uuidv4(),
        title,
        description: description,
        checked: false
    }

    todos.push(newTodo);

    res.status(201).json(newTodo);
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    const index = todos.findIndex((todo) => todo.id === id);

    if (index === -1) {
        return res.status(404).json({ error: 'ToDo not found'})
    }
    todos.splice(index, 1);

    res.status(204).json();
})

app.patch('/todos/:id', (req, res) => {
    const id = req.params.id;

    const updatedTodo = todos.find(todo => todo.id === id);

    if (!updatedTodo) {
        return res.status(404).res({ error: 'ToDo not found'})
    }
    updatedTodo.checked = req.body.checked;

    res.json(updatedTodo);
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    const { title, description, checked } = req.body;

    const index = todos.findIndex(todo => todo.id === id)

    if (index === -1) {
        return res.status(404).res({ error: 'ToDo not found'})
    }

    todos[index] = {
        id,
        title,
        description,
        checked
    }

    res.json(todos[index]);
})

