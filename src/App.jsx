import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import SplashCursor from './SplashCursor';
import Resume from './resume';
import PurdueCourses from './PurdueCourses';

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily: 'Arial, sans-serif',
          color: '#fff',
          height: '100vh',
          width: '100vw',
          overflowY: 'auto',
          position: 'relative',
          backgroundColor: '#000',
        }}
      >
        <SplashCursor />
        <nav style={{ textAlign: 'center', margin: '20px 0' }}>
          <Link to="/" style={{ color: '#FFD700', marginRight: '20px' }}>
            Resume
          </Link>
          <Link to="/purdue-courses" style={{ color: '#FFD700' }}>
            Purdue University
          </Link>
        </nav>
        <div
          style={{
            position: 'relative',
            zIndex: 100,
            height: '100%',
            width: '100%',
            padding: '50px 40px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div style={{ maxWidth: '1200px', width: '100%' }}>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/purdue-courses" element={<PurdueCourses />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
