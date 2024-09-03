import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Index';
import SelectQuiz from './pages/selectQuiz/Index';
import QuizQuestions from './pages/Quiz/Index';
import Footer from './components/footer/Index';
import Header from './components/header/Index';

import './App.css';
import Result from './pages/Result/Index';

const App = () => {
  const location = useLocation();
  const showHeaderFooter = location.pathname === '/' || location.pathname === '/startquiz' || location.pathname === '/results';

  return (
    <div className="app-container">
      {showHeaderFooter && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startquiz" element={<SelectQuiz />} />
          <Route path="/quiz/:category" element={<QuizQuestions />} />
          <Route path="/results" element={<Result />} />

        </Routes>
      </main>
    <Footer />
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
