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
    <nav className="fixed top-0 w-full bg-white shadow z-50 p-4 flex justify-center gap-8 font-sans">
      <a href="#home" className="hover:text-blue-600">Home</a>
      <a href="#about" className="hover:text-blue-600">About</a>
      <a href="#projects" className="hover:text-blue-600">Projects</a>
      <a href="#contact" className="hover:text-blue-600">Contact</a>

      <label className="ml-6 relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          checked={darkmode}
          onChange={() => setDarkMode(!darkmode)}
          className="sr-only peer"
        />
        <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
      </label>
    </nav>
  );
}

export default Navbar;
