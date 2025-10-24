import React from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import SplashCursor from "./SplashCursor";
import Resume from "./resume";
import PurdueCourses from "./PurdueCourses";
import SharksAndMinnows from "./SharksandMinnows";

function NavButtons() {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: "rgba(255, 215, 0, 0.15)",
    border: "1px solid #FFD700",
    color: "#FFD700",
    fontWeight: "600",
    borderRadius: "10px",
    padding: "10px 20px",
    margin: "0 10px",
    cursor: "pointer",
    backdropFilter: "blur(6px)",
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "rgba(255, 215, 0, 0.35)",
    transform: "scale(1.05)",
  };

  return (
    <div style={{ textAlign: "center", marginTop: "25px" }}>
      {[
        { text: "Resume", path: "/" },
        { text: "Purdue Courses", path: "/purdue-courses" },
        { text: "Play Sharks & Minnows", path: "/sharks-and-minnows" },
      ].map((btn) => (
        <button
          key={btn.path}
          onClick={() => navigate(btn.path)}
          style={buttonStyle}
          onMouseEnter={(e) => Object.assign(e.target.style, hoverStyle)}
          onMouseLeave={(e) => Object.assign(e.target.style, buttonStyle)}
        >
          {btn.text}
        </button>
      ))}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          color: "#fff",
          height: "100vh",
          width: "100vw",
          overflowY: "auto",
          position: "relative",
          backgroundColor: "#000",
        }}
      >
        <SplashCursor />

        <NavButtons />

        <div
          style={{
            position: "relative",
            zIndex: 100,
            height: "100%",
            width: "100%",
            padding: "50px 40px",
            boxSizing: "border-box",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div style={{ maxWidth: "1200px", width: "100%" }}>
            <Routes>
              <Route path="/" element={<Resume />} />
              <Route path="/purdue-courses" element={<PurdueCourses />} />
              <Route path="/sharks-and-minnows" element={<SharksAndMinnows />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
