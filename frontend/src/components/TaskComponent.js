import React, { useContext, useEffect, useState } from 'react';
import DropDown from '../utils/Dropdown';
import { TaskContext } from '../context/TaskProvider';
import { addTask, deleteTask, getTask, updateTask } from '../services/axios';
import Priority from '../utils/Priority';


const TaskComponent = ({ id }) => {

  const { title, setTitle, description, setDescription, dueDate, setDueDate, status, setOpen, user, priority } = useContext(TaskContext)
  const [edit, setEdit] = useState(true)
  
  const getTasks = async () => {
    const tasks = await getTask(id);
    setTitle(tasks.data.title)
    setDescription(tasks.data.description)
    setDueDate(tasks.data.dueDate)
  }

  useEffect(() => {
    if (id) {
      getTasks()
    }
  }, [id])

  const items = JSON.parse(localStorage.getItem('user'));

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      title: title,
      description: description,
      dueDate: dueDate,
      status: status,
      userID: user,
      priority: priority
    }
    const result = await addTask(data)
    setTitle("")
    setDescription("")
    setDueDate("")
    setOpen(null)
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (edit) {
      setEdit(false);
      return;
    }
    const data = {
      title: title,
      description: description,
      dueDate: dueDate,
      status: status,
      priority: priority
    }
    const result = await updateTask(id, data);
    setTitle("")
    setDescription("")
    setDueDate("")
    setOpen(null);
  }

  const handleDelete = async (e) => {
    e.preventDefault();
    const result = await deleteTask(id)
    setOpen(null)
  }


  return (
    <>
      <div className='w-full p-5 pr-0'>
        <div className="space-y-12">
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900 capitalize">{items.name}</h2>
            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Task Title
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="text"
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      disabled={id ? edit : false}
                      className="pl-3 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="about" className="block text-sm font-medium leading-6 text-gray-900">
                  Task Description
                </label>
                <div className="mt-2">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    rows={3}
                    disabled={id ? edit : false}
                    defaultValue={''}
                    className="px-3 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-gray-600">Write a few sentences about your Task.</p>
              </div>

              <div className="sm:col-span-4">
                <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                  Task Due Date
                </label>
                <div className="mt-2">
                  <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input
                      type="date"
                      value={dueDate}
                      disabled={id ? edit : false}
                      onChange={(e) => setDueDate(e.target.value)}
                      className="pl-3 pr-3 block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              <div className='flex items-end'>
                <DropDown edit={id ? edit : false} />
              </div>

              <div className='flex items-end'>
                <Priority edit={id ? edit : false} />
              </div>

            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          {id ? <div>
            <button
              onClick={handleUpdate}
              className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mr-2"
            >
              {!edit ? "Update Task" : "Edit Task"}
            </button>

            <button
              onClick={handleDelete}
              className="rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Delete Task
            </button>
          </div> : <button
            onClick={handleSubmit}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Add Task
          </button>}
        </div>
      </div>
    </>
  );
};

export default TaskComponent;
