// ThemeToggle.tsx
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const root = window.document.documentElement;
        if (darkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 border rounded bg-gray-200 dark:bg-gray-700"
        >
            {darkMode ? '🌙 Dark' : '☀️ Light'}
        </button>
    );
};

export default ThemeToggle;
