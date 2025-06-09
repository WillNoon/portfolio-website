import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 p-4 flex justify-center gap-8 font-sans dark:bg-gray-800 dark:text-gray-100 shadow ">
      <a href="#home" className="hover:text-blue-600">Home</a>
      <a href="#about" className="hover:text-blue-600">About</a>
      <a href="#projects" className="hover:text-blue-600">Projects</a>
      <a href="#contact" className="hover:text-blue-600">Contact</a>

      <div className="fixed top-4 right-4 z-50 flex items-center space-x-2 text-sm text-gray-700 dark:text-gray-200">
        <span>Toggle Dark Mode</span>
        <label className="inline-flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
        </label>
      </div>
    </nav>
  );
}

export default Navbar;
