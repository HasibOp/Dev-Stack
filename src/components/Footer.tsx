import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'Product',
      links: ['Home', 'Technologies', 'Projects'],
    },
    {
      title: 'Company',
      links: ['About', 'Contact', 'Careers'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service'],
    },
  ];

  return (
    <footer className='w-full bg-white pt-16 pb-8 border-t border-gray-100'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 text-center md:text-left'>
          <div className='flex flex-col items-center md:items-start col-span-1 md:col-span-1'>
            <div className='flex items-center gap-2 mb-4'>
              <div className='w-8 h-8 rounded-lg brand-gradient flex items-center justify-center text-white font-bold text-sm'>
                DS
              </div>
              <span className='text-xl font-bold text-gray-900'>
                Dev<span className='text-brand-gradient'>Stack</span>
              </span>
            </div>

            <p className='text-sm text-gray-500 mb-6 leading-relaxed max-w-xs md:max-w-full'>
              Curated tools, technologies, and resources for developers building
              modern software.
            </p>

            <div className='flex gap-4 text-sm font-medium text-gray-600'>
              <a href='#' className='hover:text-gray-900 transition-colors'>
                GitHub
              </a>
              <a href='#' className='hover:text-gray-900 transition-colors'>
                Twitter
              </a>
              <a href='#' className='hover:text-gray-900 transition-colors'>
                LinkedIn
              </a>
            </div>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h3 className='text-sm font-bold text-gray-900 uppercase tracking-wider mb-4'>
                {column.title}
              </h3>
              <ul className='space-y-3'>
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href='#'
                      className='text-sm text-gray-500 hover:text-gray-900 transition-colors'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className='border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400'>
          <p>© 2026 Dev Stack. All rights reserved.</p>
          <div className='flex gap-6'>
            <a href='#' className='hover:text-gray-900 transition-colors'>
              Privacy
            </a>
            <a href='#' className='hover:text-gray-900 transition-colors'>
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
