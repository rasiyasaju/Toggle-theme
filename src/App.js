import React, { useState } from 'react';
import './App.css'; // Assuming you have some basic global styles

function ThemeToggler() {
  // Initialize the state with 'light' as the default theme
  const [theme, setTheme] = useState('light');

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app-container ${theme}`}>
      <h1>Theme Toggler</h1>
      <p>This is a simple React app to toggle between dark and light themes.</p>
      <button onClick={toggleTheme}>
        {theme === 'light' ? 'Switch to Dark Theme' : 'Switch to Light Theme'}
      </button>
    </div>
  );
}

export default ThemeToggler;
