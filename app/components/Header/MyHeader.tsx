// components/Header.tsx
'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // document.body.style.backgroundColor = isMenuOpen ? 'gray' : 'white';
    // document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-transparent py-4  sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className={`flex items-center gap-2 text-xl font-bold text-gray-900 transition-colors duration-300`}>
          <div>webnest</div>
        </div>

        <nav className={`hidden md:flex items-center gap-4`}>
          <Link href="/" className={`py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 ${pathname === '/' ? 'text-gray-900' : ''}`}>
            Home
          </Link>
          <Link href="/about" className={`py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 ${pathname === '/about' ? 'text-gray-900' : ''}`}>
            About
          </Link>
          <Link href="/projects" className={`py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 ${pathname === '/projects' ? 'text-gray-900' : ''}`}>
            Projects
          </Link>
          <Link href="/blog" className={`py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 ${pathname === '/blog' ? 'text-gray-900' : ''}`}>
            Blog
          </Link>
          <Link href="/sample" className={`py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 ${pathname === '/sample' ? 'text-gray-900' : ''}`}>
            Sample
          </Link>
         
        </nav>
        <div className={`absolute top-1 right-1 flex items-center gap-4`}>
          <button
            onClick={toggleMenu}
            className="md:hidden border-none cursor-pointer transition-colors duration-300 flex items-center"
            aria-label={isMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 text-gray-900 ${isMenuOpen ? 'hidden' : 'block'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`w-8 h-8 text-gray-900 ${isMenuOpen ? 'block' : 'hidden'}`}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div
          className={`md:hidden absolute top-12 right-0 z-10 ${isMenuOpen ? 'block' : 'hidden'} transition-all duration-300`}
          style={{ width: '40vw' }}
        >
          <nav className="flex flex-col items-center gap-4 p-4 bg-gray-200">
            <Link href="/" className="py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 text-xl">
              Home
            </Link>
            <Link href="/about" className="py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 text-xl">
              About
            </Link>
            <Link href="/projects" className="py-2 px-4 text-black hover:text-blue-500 transition-colors duration-300 text-xl">
              Projects
            </Link>
            <Link href="/blog" className="py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 text-xl">
              Blog
            </Link>
            <Link href="/sample" className="py-2 px-4 text-black hover:text-blue-500  transition-colors duration-300 text-xl">
              Sample
            </Link>
          
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;