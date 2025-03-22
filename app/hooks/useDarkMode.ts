import { useState, useEffect } from 'react';

type Theme = 'light' | 'dark';

/**
 * Custom hook for managing dark mode functionality
 * @returns Object containing current theme and toggle function
 */
const useDarkMode = (): {
  theme: Theme;
  toggleTheme: () => void;
} => {
  // Initialize theme state with 'light' as default
  const [theme, setTheme] = useState<Theme>('light');

  // Function to toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Initialize theme from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    
    // Check if user has a saved preference
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      // Check if user prefers dark mode at the OS level
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  // Update localStorage when theme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Update document class for theme styling
  useEffect(() => {
    const root = window.document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  return { theme, toggleTheme };
};

export default useDarkMode;