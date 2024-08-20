import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  const toggleLoginStatus = () => {
    setIsLoggedIn((prevStatus) => !prevStatus);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode, isLoggedIn, toggleLoginStatus }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
