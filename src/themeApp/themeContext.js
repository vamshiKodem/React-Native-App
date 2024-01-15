import React from 'react';
import {createContext, useContext, useState} from 'react';
import {useColorScheme} from 'react-native';

const ThemeContext = createContext();

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
  const isSystemDarkMode = useColorScheme() === 'dark' ? true : false;
  const [isDarkMode, setIsDarkMode] = useState(isSystemDarkMode);

  const changeTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{isDarkMode, changeTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
