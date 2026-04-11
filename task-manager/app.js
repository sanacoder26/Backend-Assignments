const taskManager = require('./taskManager');

// CREATE
taskManager.createTask('Learn Node.js', (err, task) => {
    if (err) return console.log(err.message);
    console.log('Created:', task);

    // VIEW
    taskManager.getTasks((err, tasks) => {
        if (err) return console.log(err.message);
        console.log('All Tasks:', tasks);

        const id = tasks[0].id;

        // EDIT
        taskManager.editTask(id, 'Learn Node.js FS module', (err, updated) => {
            if (err) return console.log(err.message);
            console.log('Updated:', updated);

            // DELETE
            taskManager.deleteTask(id, (err) => {
                if (err) return console.log(err.message);
                console.log('Deleted task');

                // FINAL VIEW
                taskManager.getTasks((err, finalTasks) => {
                    if (err) return console.log(err.message);
                    console.log('Final Tasks:', finalTasks);
                });
            });
        });
    });
});