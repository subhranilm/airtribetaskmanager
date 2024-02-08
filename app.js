const express = require('express');
const app = express();
const port = 3000;
const taskData = require('./task.json');
const Validator = require('./helpers/validator');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(port, (err) => {
    if (err) {
        return console.log('Something bad happened', err);
    }
    console.log(`Server is listening on ${port}`);
});

app.get('/tasks', (req, res)=>{
    return res.status(200).json(taskData.tasks);
})

app.get('/tasks/:taskId', (req, res)=>{
    const tasks = taskData.tasks;
    const taskIdInRequest = parseInt(req.params.taskId)
    let filteredTask = tasks.filter(task => task.id == taskIdInRequest);
    if(filteredTask.length == 0)
    {
        return res.status(404).send("Requested task is not found ")
    }
    return res.status(200).json(filteredTask[0]);
})

app.post('/tasks', (req, res)=>{
    const newTaskData = req.body;
    const validateTaskResult = Validator.validateTaskInfo(newTaskData);
    if(Validator.validateTaskInfo(newTaskData).status == true){
        let currentTasks = taskData;
        const currentTaskSize = currentTasks.tasks.length;
        newTaskData.id = currentTaskSize + 1;
        currentTasks.tasks.push(newTaskData);
        return res.status(201).send("Task has been successfuly validated and created");
    } else{
        return res.status(400).json(Validator.validateTaskInfo(newTaskData));
    }
})

app.put('/tasks/:taskId', (req,res)=>{
    const taskIdInRequest = parseInt(req.params.taskId);
    const newTask = req.body;

    const index = taskData.tasks.findIndex(task => task.id == taskIdInRequest)
    if(index !== -1){
        const validateTaskResult = Validator.validateTaskInfo(newTask);
        if(Validator.validateTaskInfo(newTask).status == true){
            taskData.tasks[index].title = newTask.title;
            taskData.tasks[index].description = newTask.description;
            taskData.tasks[index].completed = newTask.completed;
            return res.status(200).send("Task has been successfuly updated");
        } else{
            res.status(400).json(Validator.validateTaskInfo(newTask));
        }
    } else {
        res.status(404).json({ error: 'Task not found' });
    }
})

app.delete('/tasks/:taskId', (req,res)=>{
    const taskIdInRequest = parseInt(req.params.taskId);
    const index = taskData.tasks.findIndex(task => task.id == taskIdInRequest)

    if(index !== -1){
        taskData.tasks.splice(index, 1);
        return res.status(200).send("Task has been successfuly deleted");
    } else {
        res.status(404).json({ error: 'Task not found' });
    }

})

module.exports = app;