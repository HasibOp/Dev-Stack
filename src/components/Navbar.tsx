import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from '../assets/logo-text.png';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-gray-100'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3'>
        <div className='flex items-center cursor-pointer'>
          <img
            src={logo}
            alt='DevStack Logo'
            className='h-9 w-auto object-contain'
          />
        </div>

        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href='#'
                className={`text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-gray-900 ${
                  link === 'Home' ? 'text-pink-600' : 'text-gray-500'
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className='hidden md:flex items-center gap-5'>
          <a
            href='#'
            className='text-sm font-medium text-gray-500 transition-colors duration-200 cursor-pointer hover:text-gray-900'
          >
            Sign In
          </a>
          <button className='bg-pink-600 hover:bg-pink-700 transition-colors duration-200 text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer'>
            Sign Up
          </button>
        </div>

        <button
          className='md:hidden text-gray-800 cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <a
              key={link}
              href='#'
              className={`text-sm font-medium transition-colors duration-200 cursor-pointer hover:text-gray-900 ${
                link === 'Home' ? 'text-pink-600' : 'text-gray-500'
              }`}
            >
              {link}
            </a>
          ))}

          <a
            href='#'
            className='text-sm font-medium text-gray-500 transition-colors duration-200 cursor-pointer hover:text-gray-900 mt-2 border-t border-gray-100 pt-4'
          >
            Sign In
          </a>
          <button className='bg-pink-600 hover:bg-pink-700 transition-colors duration-200 text-white text-sm font-semibold px-5 py-2 rounded-full cursor-pointer'>
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
