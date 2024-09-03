import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Home from './pages/Home/Index';
import SelectQuiz from './pages/selectQuiz/Index';
import QuizQuestions from './pages/Quiz/Index';
import Footer from './components/footer/Index';
import Header from './components/header/Index';

import './App.css';

const App = () => {
  const location = useLocation();
  const showHeaderFooter = location.pathname === '/' || location.pathname === '/startquiz';

  return (
    <div className="app-container">
      {showHeaderFooter && <Header />}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/startquiz" element={<SelectQuiz />} />
          <Route path="/quiz/:category" element={<QuizQuestions />} />
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
