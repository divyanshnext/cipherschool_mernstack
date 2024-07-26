import React, { createContext, useState } from 'react';

const TaskContext = createContext();
const TASK_EDITABLE_FIELD_LIST = ["title", "description"];

export const TaskProvider = ({ children }) => {
    const [taskList, setTaskList] = useState([]);

    // Add a new task to the list
    const addNewTask = (task) => {
        setTaskList(prevTaskList => [...prevTaskList, task]);
    };

    // Delete a task by its ID
    const deleteTask = (taskId) => {
        setTaskList(prevTaskList => prevTaskList.filter(task => task.taskId !== taskId));
    };

    // Edit an existing task
    const editTask = (updatedTask) => {
        setTaskList(prevTaskList =>
            prevTaskList.map(task =>
                task.taskId === updatedTask.taskId
                    ? { ...task, ...TASK_EDITABLE_FIELD_LIST.reduce((acc, field) => ({ ...acc, [field]: updatedTask[field] }), {}) }
                    : task
            )
        );
    };

    return (
        <TaskContext.Provider value={{ taskList, addNewTask, deleteTask, editTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContext;
