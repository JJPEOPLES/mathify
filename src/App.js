import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Topics from './pages/Topics';
import Practice from './pages/Practice';
import Calculator from './pages/Calculator';
import About from './pages/About';
import NotFound from './pages/NotFound';

// Topic Pages
import Algebra from './pages/topics/Algebra';
import AdditionSubtraction from './pages/topics/AdditionSubtraction';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            <Route path="/topics/algebra" element={<Algebra />} />
            <Route path="/topics/addition-subtraction" element={<AdditionSubtraction />} />
            <Route path="/practice" element={<Practice />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;