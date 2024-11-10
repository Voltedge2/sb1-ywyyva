import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-24 right-4 z-50 p-3 rounded-full bg-gray-800 dark:bg-white shadow-lg hover:scale-110 transition-all"
      aria-label="Toggle theme"
    >
      {isDark ? (
        <Sun className="h-6 w-6 text-gray-900" />
      ) : (
        <Moon className="h-6 w-6 text-white" />
      )}
    </button>
  );
}