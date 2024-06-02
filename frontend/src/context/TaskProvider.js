import React, { useState, createContext, useEffect } from 'react';
import { getTask, getTaskByUser } from '../services/axios';


export const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [dueDate, setDueDate] = useState('');
    const [status, setStatus] = useState(false);
    const [open, setOpen] = useState(null)
    const [list, setList] = useState([])
    const [user, setUser] = useState()
    const [priority, setPriority] = useState()
    const items = JSON.parse(localStorage.getItem('user'));

    const getTasks = async () => {
        const tasks = await getTaskByUser(items?.sub);
        console.log(tasks)
        setList(tasks?.data)
    }
    useEffect(() => {
        if (items?.sub) {
            getTasks()
        }
    }, [open, user])

    useEffect(() => {
        setUser(items?.sub)
    }, [])
    return (
        <TaskContext.Provider value={{ title, setTitle, description, setDescription, dueDate, setDueDate, status, setStatus, list, setList, open, setOpen, user, setUser, priority, setPriority }}>
            {children}
        </TaskContext.Provider>
    );
}

export default TaskProvider;
