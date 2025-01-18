"use client";

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
         // document.body.style.backgroundColor = isMenuOpen ? 'gray' : 'white';
         // document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    }, [isMenuOpen]);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 bg-transparent`}
        >
            <div className="container mx-auto flex justify-between items-center px-4">
                <Link href="/" className={`flex items-center gap-2 text-xl font-bold text-gray-900 transition-colors duration-300`}>
                   <div>My Portfolio</div>
                </Link>

                <nav className={`hidden md:flex items-center gap-4`}>
                    <Link href="/" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300">
                        Home
                    </Link>
                    <Link href="/about" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300">
                        About
                    </Link>
                    <Link href="/projects" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300">
                        Projects
                    </Link>
                    <Link href="/blog" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300">
                         Blog
                    </Link>
                    <Link href="/contact" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300">
                         Contact
                    </Link>
                </nav>

                <div
                    className={`absolute top-1 right-1 flex items-center gap-4`}
                >
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
                                className={`w-8 h-8 text-gray-900 ${
                                    isMenuOpen ? 'hidden' : 'block'
                                }`}
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className={`w-8 h-8 text-gray-900 ${
                                        isMenuOpen ? 'block' : 'hidden'
                                    }`}
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
                       <Link href="/" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300 text-xl">
                            Home
                        </Link>
                        <Link href="/about" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300 text-xl">
                            About
                        </Link>
                        <Link href="/projects" className="py-2 px-4 text-gray-700 hover:text-blue-500 transition-colors duration-300 text-xl">
                            Projects
                        </Link>
                        <Link href="/blog" className="py-2 px-4 text-gray-700 hover:text-blue-500  transition-colors duration-300 text-xl">
                            Blog
                        </Link>
                       <Link href="/contact" className="py-2 px-4 text-gray-700 hover:text-blue-500 transition-colors duration-300 text-xl">
                            Contact
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}