import express from 'express';
import { createTask, getAllTasks, getTaskById, updateTaskById, deleteTaskById, getTaskByUserId } from '../controllers/taskController.js';

const router = express.Router();

router.post('/createTask/', createTask);
router.get('/getTask/', getAllTasks);
router.get('/getTask/:id/', getTaskById);
router.get('/getUserTask/:userID/', getTaskByUserId);
router.put('/updateTask/:id/', updateTaskById);
router.delete('/deleteTask/:id/', deleteTaskById);

export default router;
