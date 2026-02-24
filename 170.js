import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

// Main Student Interaction Panel Component
const StudentInteractionPanel = () => {
  // 1️⃣ Login Status
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => {
    setIsLoggedIn((prev) => !prev);
  };

  // 2️⃣ Click Counter
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prev) => prev + 1);
  };

  // 3️⃣ Theme Switcher
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev) => !prev);
  };

  // 4️⃣ Component Load Message
  useEffect(() => {
    console.log("Component Loaded");
  }, []); // empty dependency array → runs only once

  // 5️⃣ Feedback Input
  const [feedback, setFeedback] = useState("");

  const handleFeedbackChange = (e) => {
    setFeedback(e.target.value);
  };

  // Dynamic styles for light/dark theme
  const appStyle = {
    backgroundColor: isDarkTheme ? "#333" : "#f5f5f5",
    color: isDarkTheme ? "#f5f5f5" : "#333",
    minHeight: "100vh",
    padding: "2rem",
    fontFamily: "Arial, sans-serif",
    transition: "all 0.3s ease",
  };

  const buttonStyle = {
    padding: "0.5rem 1rem",
    margin: "0.5rem",
    cursor: "pointer",
  };

  const inputStyle = {
    padding: "0.5rem",
    margin: "0.5rem 0",
    width: "100%",
    maxWidth: "300px",
  };

  return (
    <div style={appStyle}>
      <h1>Student Interaction Panel</h1>

      {/* 1️⃣ Login Status Section */}
      <div>
        <h2>Status: {isLoggedIn ? "User Logged In" : "User Logged Out"}</h2>
        <button style={buttonStyle} onClick={toggleLogin}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>

      {/* 2️⃣ Click Counter */}
      <div>
        <h2>Click Counter: {clickCount}</h2>
        <button style={buttonStyle} onClick={handleClick}>
          Click Me
        </button>
      </div>

      {/* 3️⃣ Theme Switcher */}
      <div>
        <button style={buttonStyle} onClick={toggleTheme}>
          Switch to {isDarkTheme ? "Light" : "Dark"} Theme
        </button>
      </div>

      {/* 5️⃣ Feedback Input */}
      <div>
        <h2>Feedback:</h2>
        <input
          type="text"
          placeholder="Type your feedback..."
          value={feedback}
          onChange={handleFeedbackChange}
          style={inputStyle}
        />
        <p>Live Feedback: {feedback}</p>
      </div>
    </div>
  );
};

// Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<StudentInteractionPanel />);