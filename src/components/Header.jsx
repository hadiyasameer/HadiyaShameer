import React, { useState } from 'react';

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full max-w-xs flex flex-col items-center justify-center relative">
            <nav className="w-full">
                <div className="sm:hidden flex justify-end p-2 fixed top-4 right-5 ">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        type="button"
                        className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                        aria-controls="mobile-menu"
                        aria-expanded={menuOpen}
                    >
                        <span className="sr-only">Open main menu</span>
                        {menuOpen ? (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        )}
                    </button>
                </div>
                <div className="hidden sm:flex flex-col space-y-2 items-center justify-center">
                    <a href="#summary" className="rounded-md px-3 py-2 text-xl font-medium text-white hover:bg-gray-700">Home</a>
                    <a href="#projects" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                    <a href="#about" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                    <a href="#contact" className="rounded-md px-3 py-2 text-xl font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                </div>

                {menuOpen && (
                    <div id="mobile-menu" className="sm:hidden flex flex-col space-y-2 px-4 pb-3 items-center justify-center">
                        <a href="#summary" className="block rounded-md bg-gray-900 px-3 py-2 text-base font-medium text-white">Home</a>
                        <a href="#projects" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Projects</a>
                        <a href="#about" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">About</a>
                        <a href="#contact" className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white">Contact</a>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Header;
