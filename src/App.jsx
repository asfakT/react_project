
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import ContactUs from './components/ContactUs/ContactUs';

const App = () => {
  return (

    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </div>

  );
};

export default App;


