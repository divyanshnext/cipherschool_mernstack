import React, { useContext, useState } from "react";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import TaskContext from '../context/TaskContext';

const AddTask = () => {
    const { addNewTask } = useContext(TaskContext);
    const [task, setTask] = useState({
        title: "",
        description: "",
    });
    const navigate = useNavigate(); // Initialize navigate

    const handleInputChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value,
        });
    };

    const onFormSubmit = (e) => {
        e.preventDefault();
        addNewTask(task);
        navigate('/'); // Navigate to To Do List after adding the task
    };

    return (
        <section className="screen">
            <h3 className="ui heading center">Add New Task</h3>
            <div className="ui form">
                <form onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Title</label>
                        <input
                            type="text"
                            spellCheck={false}
                            placeholder="Task Title"
                            name="title"
                            onChange={handleInputChange}
                            value={task.title}
                        />
                    </div>
                    <div className="field">
                        <label>Description</label>
                        <input
                            type="text"
                            spellCheck={false}
                            placeholder="Task Description"
                            name="description"
                            onChange={handleInputChange}
                            value={task.description}
                        />
                    </div>
                    <button type="submit" className="ui primary button">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddTask;
