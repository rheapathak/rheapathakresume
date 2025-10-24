import React from 'react';
import SplashCursor from './SplashCursor';
import Resume from './Resume';

function App() {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        color: '#fff',
        height: '100vh',
        width: '100vw',
        overflowY: 'auto', // allows scrolling if content is too tall
        position: 'relative',
        backgroundColor: '#000', // fallback background
      }}
    >
      <SplashCursor />
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
          <Resume />
        </div>
      </div>
    </div>
  );
}

export default App;
