import React, { useContext, useState } from 'react';
import TaskContext from '../context/TaskContext';
import { formatDate } from '../utils/DateUtil';

const Task = ({ task: incomingTask }) => {
  const { title, description, createdDate, taskId } = incomingTask;
  const { deleteTask, editTask } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState({ ...incomingTask });
  const [originalTask, setOriginalTask] = useState({ ...incomingTask });

  const handleInputChange = (e) => {
    setTask({
      ...task,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    editTask(task);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTask(originalTask); // Restore original task
    setIsEditing(false);   // Exit editing mode
  };

  if (isEditing) {
    return (
      <div className="card">
        <div className="content">
          <div className="ui form">
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
          </div>
          <div className="meta">{formatDate(createdDate)}</div>
        </div>

        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={handleSave}>
              Save
            </div>
            <div className="ui basic red button" onClick={handleCancel}>
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="content">
          <div className="header">{title}</div>
          <div className="meta">{formatDate(createdDate)}</div>
          <div className="description">{description}</div>
        </div>

        <div className="extra content">
          <div className="ui two buttons">
            <div className="ui basic green button" onClick={() => setIsEditing(true)}>
              Edit task
            </div>
            <div className="ui basic red button" onClick={() => deleteTask(taskId)}>
              Delete task
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Task;
