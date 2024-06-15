import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
    const [task, setTask] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (task.trim()) {
            addTask(task);
            setTask('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <div className="input-group">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Enter a new task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <button type="submit" className="btn btn-primary">Add Task</button>
            </div>
        </form>
    );
};

export default TaskInput;
