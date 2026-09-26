import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const navLinks = ['Home', 'Technologies', 'Projects', 'About', 'Contact'];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className='sticky top-0 z-50 bg-white border-b border-black'>
      <div className='max-w-7xl mx-auto flex items-center justify-between px-6 py-3'>
        <div className='flex items-center gap-2'>
          <div className='w-8 h-8 rounded-md bg-linear-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm'>
            DS
          </div>
          <span className='text-lg font-bold text-gray-900'>
            Dev<span className='text-pink-600'>Stack</span>
          </span>
        </div>

        <ul className='hidden md:flex items-center gap-8'>
          {navLinks.map((link) => (
            <li
              key={link}
              className={`text-sm font-medium ${
                link === 'Home' ? 'text-pink-600' : 'text-gray-700'
              }`}
            >
              {link}
            </li>
          ))}
        </ul>

        <div className='hidden md:flex items-center gap-5'>
          <span className='text-sm font-medium text-gray-800'>Sign In</span>
          <button className='bg-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full'>
            Sign Up
          </button>
        </div>

        <button
          className='md:hidden text-gray-800'
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className='md:hidden bg-white border-t border-gray-200 px-6 py-4 flex flex-col gap-4'>
          {navLinks.map((link) => (
            <span
              key={link}
              className={`text-sm font-medium ${
                link === 'Home' ? 'text-pink-600' : 'text-gray-700'
              }`}
            >
              {link}
            </span>
          ))}
          <span className='text-sm font-medium text-gray-800'>Sign In</span>
          <button className='bg-pink-600 text-white text-sm font-semibold px-5 py-2 rounded-full'>
            Sign Up
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
