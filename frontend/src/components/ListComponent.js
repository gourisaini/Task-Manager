import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskProvider';
import TaskComponent from './TaskComponent';

const ListComponent = () => {
    const { list, open, setOpen, setUser, setList } = useContext(TaskContext);
    const sortedItems = list.sort((a, b) => a.priority - b.priority);
    const [editTaskId, setEditTaskId] = useState(null);
    const handleTask = (task) => {
        if (task === "add") {
            setOpen(task);
        } else {
            setEditTaskId(task._id);
            setOpen("edit");
        }
    };
    const items = JSON.parse(localStorage.getItem('user'));
    const handleSignOut = () => {
        localStorage.removeItem('user');
        setUser('')
        setList([])
    };

    return (
        <>
            {open === null ? <div className="container mx-auto px-4">
                <div className='flex items-center justify-between'>
                    <div>
                        <h1 className="text-3xl font-bold mb-4 capitalize">Welcome {items.name}</h1>
                        <h2 className="text-2xl font-medium mb-4">Task List</h2>
                    </div>
                    <div className='flex gap-2'>
                        <button onClick={() => handleTask("add")} className="flex items-center justify-center px-3 py-1 border border-green-500 text-green-500 rounded-md hover:bg-green-500 hover:text-white focus:outline-none focus:bg-green-500 focus:text-white transition duration-300 ease-in-out">

                            Add Task
                        </button>
                        <button onClick={handleSignOut} className="flex items-center justify-center px-3 py-1 border border-red-500 text-red-500 rounded-md hover:bg-red-500 hover:text-white focus:outline-none focus:bg-red-500 focus:text-white transition duration-300 ease-in-out">

                            Sign Out
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {sortedItems?.map((task) => (
                        <div
                            key={task.id}
                            className={`bg-white p-6 rounded-lg shadow-md flex flex-col justify-between border-t-4 ${task.status ? "border-green-600" : "border-blue-600"}   `}
                        >
                            <div>
                                <h3 className="text-lg font-semibold mb-2">{task.title}</h3>
                                <p className="text-sm text-gray-600">Due Date: {task.dueDate}</p>
                                <p className="text-sm text-gray-600">Status: {task.status ? "Completed" : "In progress"}</p>
                                <p className="flex items-end gap-1.5 i text-sm text-gray-600">
                                    Priority:
                                    {task.priority === 1 ? (
                                        <div style={{ backgroundColor: "red" }} className="w-4 h-4 rounded-full"></div>
                                    ) : task.priority === 2 ? (
                                        <div style={{ backgroundColor: "orange" }} className=" w-4 h-4 rounded-full"></div>
                                    ) : (
                                        <div style={{ backgroundColor: "green" }} className=" w-4 h-4 rounded-full"></div>
                                    )}
                                </p>
                            </div>

                            <button
                                className={`mt-4 px-4 py-2 rounded bg-gray-500 hover:bg-gray-600 text-white`}
                                onClick={() => handleTask(task)}
                            >
                                Open
                            </button>
                        </div>
                    ))}
                </div>
            </div> : <div>
                {open === "add" ? <TaskComponent /> : <TaskComponent id={editTaskId} />}
            </div>}

        </>
    );
};

export default ListComponent;
