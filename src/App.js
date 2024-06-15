import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import ItineraryPage from './pages/ItineraryPage';
import './App.css';

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/itinerary/:name" element={<ItineraryPage />} />
            </Routes>
        </Router>
    );
};

export default App;