import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BackgroundVideo from '../components/BackgroundVideo';
import '../App.css'; // Ensure this includes the transparent-background class

const LoginPage = () => {
    const [name, setName] = useState('');
    const navigate = useNavigate();

    const handleLogin = (e) => {
        e.preventDefault();
        if (name.trim()) {
            navigate(`/itinerary/${encodeURIComponent(name)}`);
        }
    };

    return (
        <div>
            <BackgroundVideo />
            <div className="container text-center mt-5">
                <div className="transparent-background">
                    <h1 className="mb-4">Let's Plan your Itinerary</h1>
                    <form onSubmit={handleLogin}>
                        <input
                            type="text"
                            className="form-control mb-3"
                            placeholder="Enter Your Name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                        <button type="submit" className="btn btn-primary">Start Planning</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
