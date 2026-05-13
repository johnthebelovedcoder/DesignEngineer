import { createContext, useContext, useEffect, useState } from 'react';

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [dark, setDark] = useState(() => {
        const stored = localStorage.getItem('darkMode');
        if (stored !== null) return stored === 'true';
        return window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('darkMode', dark);
    }, [dark]);

    const toggle = () => setDark(prev => !prev);

    return (
        <DarkModeContext.Provider value={{ dark, toggle }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => useContext(DarkModeContext);
