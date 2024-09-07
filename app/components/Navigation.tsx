'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: '機能', href: '#features' },
    { name: 'スクリーンショット', href: '#screenshots' },
    { name: 'ユーザーの声', href: '#reviews' },
    { name: 'ダウンロード', href: '#download' },
  ];

  return (
    <nav className='md:flex'>
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white hover:text-emerald-200 focus:outline-none focus:text-emerald-200'>
          {isOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
        </button>
      </div>

      <ul className={`${isOpen ? 'block' : 'hidden'} md:flex md:space-x-8 absolute md:relative top-16 md:top-0 left-0 right-0 bg-emerald-800 md:bg-transparent shadow-md md:shadow-none p-4 md:p-0`}>
        {navItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className='block py-2 md:py-0 text-white hover:text-emerald-200 transition-colors' onClick={() => setIsOpen(false)}>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
