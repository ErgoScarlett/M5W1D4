import React, { useState } from 'react';
import { createContext } from 'react';

export const ThemeContext = createContext({theme: 'light'});

export default function ThemeContextProvider({children}) {

    const [theme, setTheme] = useState('light');
    const toggleTheme = () => {
      setTheme(theme === 'light'? 'dark' : 'light');
    }

  return (
    <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>{children}</ThemeContext.Provider>
  )
}