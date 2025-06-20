// src/components/Login/Login.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [credentials, setCredentials] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Demo login success - Save user with name
        const demoUser = {
            username: credentials.username,
            email: credentials.email,
        };

        localStorage.setItem("user", JSON.stringify(demoUser));
        alert(`Login successful! Welcome ${credentials.username}`);
        navigate("/"); // Go to homepage
    };

    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
                <h2 className="text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Username</label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter Username"
                            className="form-control"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter email"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="Enter password"
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Login</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
