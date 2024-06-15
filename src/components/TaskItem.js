import React, { useState } from 'react';

const TaskItem = ({ task, updateTask, deleteTask }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [newTask, setNewTask] = useState(task);

    const handleUpdate = () => {
        updateTask(task, newTask);
        setIsEditing(false);
    };

    return (
        <div className="d-flex justify-content-between align-items-center mb-2">
            {isEditing ? (
                <>
                    <input
                        type="text"
                        className="form-control me-2"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                    />
                    <button className="btn btn-success me-2" onClick={handleUpdate}>Save</button>
                    <button className="btn btn-secondary" onClick={() => setIsEditing(false)}>Cancel</button>
                </>
            ) : (
                <>
                    <span>{task}</span>
                    <div>
                        <button className="btn btn-warning me-2" onClick={() => setIsEditing(true)}>Edit</button>
                        <button className="btn btn-danger" onClick={() => deleteTask(task)}>Delete</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default TaskItem;
