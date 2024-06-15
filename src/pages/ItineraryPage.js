import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import TaskInput from '../components/TaskInput';
import TaskList from '../components/TaskList';
import BackgroundVideo from '../components/BackgroundVideo';
import '../App.css';

const ItineraryPage = () => {
    const [tasks, setTasks] = useState([]);
    const { name } = useParams();

    const addTask = (task) => {
        setTasks([...tasks, task]);
    };

    const updateTask = (oldTask, newTask) => {
        setTasks(tasks.map(task => task === oldTask ? newTask : task));
    };

    const deleteTask = (task) => {
        setTasks(tasks.filter(t => t !== task));
    };

    return (
        <div>
            <BackgroundVideo />
            <div className="container text-center mt-5">
                <div className="transparent-background">
                    <h1 className="mb-4">Itinerary Planner</h1>
                    <h2>Welcome, {decodeURIComponent(name)}!</h2>
                    <TaskInput addTask={addTask} />
                    <TaskList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} />
                </div>
            </div>
        </div>
    );
};

export default ItineraryPage;
