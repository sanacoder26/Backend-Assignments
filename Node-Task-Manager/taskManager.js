const fs = require('fs');

const FILE = 'tasks.json';

// Read tasks
function readTasks(callback) {
    fs.readFile(FILE, 'utf8', (err, data) => {
        if (err) return callback(err);

        let tasks = [];
        try {
            tasks = JSON.parse(data || '[]');
        } catch (e) {
            return callback(e);
        }

        callback(null, tasks);
    });
}

// Write tasks
function writeTasks(tasks, callback) {
    fs.writeFile(FILE, JSON.stringify(tasks, null, 2), (err) => {
        if (err) return callback(err);
        callback(null);
    });
}

// CREATE
function createTask(title, callback) {
    readTasks((err, tasks) => {
        if (err) return callback(err);

        const newTask = {
            id: Date.now(),
            title: title
        };

        tasks.push(newTask);

        writeTasks(tasks, (err) => {
            if (err) return callback(err);
            callback(null, newTask);
        });
    });
}

// READ
function getTasks(callback) {
    readTasks(callback);
}

// UPDATE
function editTask(id, newTitle, callback) {
    readTasks((err, tasks) => {
        if (err) return callback(err);

        const index = tasks.findIndex(t => t.id == id);

        if (index === -1) {
            return callback(new Error('Task not found'));
        }

        tasks[index].title = newTitle;

        writeTasks(tasks, (err) => {
            if (err) return callback(err);
            callback(null, tasks[index]);
        });
    });
}

// DELETE
function deleteTask(id, callback) {
    readTasks((err, tasks) => {
        if (err) return callback(err);

        const newTasks = tasks.filter(t => t.id != id);

        if (tasks.length === newTasks.length) {
            return callback(new Error('Task not found'));
        }

        writeTasks(newTasks, (err) => {
            if (err) return callback(err);
            callback(null);
        });
    });
}

module.exports = {
    createTask,
    getTasks,
    editTask,
    deleteTask
};