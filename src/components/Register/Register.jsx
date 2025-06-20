import React, { useState } from 'react';

const Register = () => {

    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.taget.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //alert("Registered Successfully (Demo only)");
        setIsSubmitted(true);
    };


    return (
        <div className="container d-flex justify-content-center align-items-center mt-5">
            <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
                {isSubmitted ? (
                    <div className="text-center">
                        <h4 className="text-success">🎉 Registration Successful!</h4>
                        <p>Thank you for registering.</p>
                    </div>
                ) : (
                    <>
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Username</label>
                                <input
                                    type="text"
                                    name="username"
                                    className="form-control"
                                    placeholder="Enter username"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
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
                                    name="password"
                                    className="form-control"
                                    placeholder="Enter password"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary w-100">
                                Register
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
};

export default Register;
