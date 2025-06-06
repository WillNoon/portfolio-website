import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-white shadow z-50 p-4 flex justify-center gap-8">
      <a href="#home" className="hover:text-blue-600">Home</a>
      <a href="#about" className="hover:text-blue-600">About</a>
      <a href="#projects" className="hover:text-blue-600">Projects</a>
      <a href="#contact" className="hover:text-blue-600">Contact</a>
    </nav>
  );
}

export default Navbar;
