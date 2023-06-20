import React, { createContext, useState } from 'react';

const ThemeModeContext = createContext();

const ThemeModeProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState('light');

    const toggleThemeMode = () => {
        setThemeMode(themeMode == "light" ? "dark" : "light");
    };

    return (
        <ThemeModeContext.Provider value={{ themeMode, toggleThemeMode }}        >
            {children}
        </ThemeModeContext.Provider>
    );
};

export { ThemeModeContext, ThemeModeProvider };
