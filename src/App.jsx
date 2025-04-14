import React, { useState, useEffect } from "react";
import HistoryQuizGenerator from './components/HistoryQuizGenerator';
import LandingPage from './components/LandingPage';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Agar ekran kengligi 768px yoki kichik bo'lsa
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="App">
      {isMobile ? (
        <LandingPage />
      ) : (
        <HistoryQuizGenerator />
      )}
    </div>
  );
}

export default App;
