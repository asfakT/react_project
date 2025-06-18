import { Link } from 'react-router-dom';
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav className={`${styles.navigation} container`}>
            <div className="logo">
                <img src="/images/brand_logo.png" alt="logo" />
            </div>
            <ul>
                <li><Link to="/">Menu</Link></li>
                <li><Link to="/dicegame">Dice Game</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button className="btn-login">login</button>
        </nav>
    );
};

export default Navigation;
