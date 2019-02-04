import express from 'express';
import tasksController from './tasks.ctrl';

export default function () {
    return express.Router()

        .get('/tasks', tasksController.getAllTasks)
        // .get('/tasks/:id', tasksController.getOneTaskById)
        // .post('/tasks', tasksController.createTask)
        // .delete('/tasks/:id', tasksController.deleteOneTaskById)
        // .patch('/tasks/:id', tasksController.updateOneTaskById)

}