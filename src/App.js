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

// Topic Pages - Elementary Math
import AdditionSubtraction from './pages/topics/AdditionSubtraction';
import MultiplicationDivision from './pages/topics/MultiplicationDivision';
import Fractions from './pages/topics/Fractions';
import Decimals from './pages/topics/Decimals';

// Topic Pages - Algebra
import Algebra from './pages/topics/Algebra';
import LinearEquations from './pages/topics/LinearEquations';
import QuadraticEquations from './pages/topics/QuadraticEquations';
import Functions from './pages/topics/Functions';
import Polynomials from './pages/topics/Polynomials';

// Topic Pages - Geometry
import Geometry from './pages/topics/Geometry';
import Trigonometry from './pages/topics/Trigonometry';

// Topic Pages - Statistics & Probability
import Statistics from './pages/topics/Statistics';
import Probability from './pages/topics/Probability';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/topics" element={<Topics />} />
            
            {/* Elementary Math Routes */}
            <Route path="/topics/addition-subtraction" element={<AdditionSubtraction />} />
            <Route path="/topics/multiplication-division" element={<MultiplicationDivision />} />
            <Route path="/topics/fractions" element={<Fractions />} />
            <Route path="/topics/decimals" element={<Decimals />} />
            
            {/* Algebra Routes */}
            <Route path="/topics/algebra" element={<Algebra />} />
            <Route path="/topics/linear-equations" element={<LinearEquations />} />
            <Route path="/topics/quadratic-equations" element={<QuadraticEquations />} />
            <Route path="/topics/functions" element={<Functions />} />
            <Route path="/topics/polynomials" element={<Polynomials />} />
            
            {/* Geometry Routes */}
            <Route path="/topics/geometry" element={<Geometry />} />
            <Route path="/topics/trigonometry" element={<Trigonometry />} />
            
            {/* Statistics & Probability Routes */}
            <Route path="/topics/statistics" element={<Statistics />} />
            <Route path="/topics/probability" element={<Probability />} />
            
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