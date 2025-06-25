// src/App.jsx
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import ContactUs from './components/ContactUs/ContactUs';
import DiceGame from './components/DiceGame/DiceGame';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import FoodyZone from './components/FoodyZone/FoodyZone';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  return (
    <div>
      <Navigation user={user} setUser={setUser} />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dicegame" element={<DiceGame />} />
        <Route path='/foodyzone' element= {<FoodyZone/>} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
      </Routes>
    </div>
  );
};

export default App;
