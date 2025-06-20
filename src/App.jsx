
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import ContactUs from './components/ContactUs/ContactUs';
import DiceGame from './components/DiceGame/DiceGame';
import AboutUs from './components/AboutUs/aboutUs';
import Register from './components/Register/Register';
import Login from './components/Login/Login';

const App = () => {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/dicegame" element={<DiceGame /> }/>
        <Route path="/about" element={<AboutUs />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>

  );
};

export default App;


