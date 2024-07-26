import { useContext } from 'react';
import Task from "../components/Task";
import { useNavigate } from 'react-router-dom';
import TaskContext from '../context/TaskContext';
import React from 'react';

const ToDoScreen = () => {
    const { taskList } = useContext(TaskContext);
    const navigate = useNavigate();

    return (
        <div className="screen">
            <h1 className="ui heading center">To Do List</h1>
            <div>
                <button onClick={() => navigate("/add-task")} className="ui secondary button">Add Task</button>
                <section className="section">
                    <div className="ui cards">
                        {taskList.map((task, index) => (<Task task={task} key={task.taskId} />))}
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ToDoScreen;
