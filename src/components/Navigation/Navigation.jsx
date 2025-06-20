import { Link } from 'react-router-dom';
import styles from './Navigation.module.css'; // Keep if you have custom styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";


const Navigation = () => {

    const [user, setUser] = useState(null);

    useEffect(() => {
        const savedUser = localStorage.getItem("user");
        if (savedUser) {
            setUser(JSON.parse(savedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <nav className={`navbar navbar-expand-lg navbar-light bg-light ${styles.navigation}`}>
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src="/images/brand_logo.png" alt="logo" width="60" height="40" />
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Menu</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/dicegame">Dice Game</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <div className='d-flex align-items-center'>
                        {user ? (
                            <>
                                <span className="me-3 fw-bold">Hello, {user.username}</span>
                                <button onClick={handleLogout} className="btn btn-danger">Logout</button>
                            </>
                        ) : (
                            <>
                                <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
                                <Link to="/register" className="btn btn-primary">Register</Link>
                            </>
                        )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
