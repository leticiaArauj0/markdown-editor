import { useState, useEffect } from 'react';

export function useTheme() {
    const [theme, setTheme] = useState(() => {

    const savedTheme = localStorage.getItem('theme');
    
    if (!savedTheme) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches 
        ? 'dark' 
        : 'light';
    }
    
    return savedTheme;
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }

  return { theme, toggleTheme };
}
