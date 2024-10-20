import React, { useState, useEffect } from 'react';
import logo from "../assets/kavindu-header.png";
import { Link, useLocation } from 'react-router-dom';

function Navbar({ togglePopup, notification }) {
    const [isOpen, setIsOpen] = useState(false); // State to track mobile menu visibility
    const [isFixed, setIsFixed] = useState(false);
    const location = useLocation(); // Get the current location

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the mobile menu
    };

    // Scroll event handler to set navbar fixed state
    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsFixed(true);
        } else {
            setIsFixed(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll); // Add scroll event listener
        return () => {
            window.removeEventListener('scroll', handleScroll); // Cleanup on unmount
        };
    }, []);

    return (
        <div>
            <nav className={`fixed top-0 left-0 right-0 z-10 flex items-center justify-between py-6 h-16 ${isFixed ? 'bg-white shadow-md' : ''}`}>
                {/* Left side - Logo */}
                <div className="flex flex-shrink-0 items-center">
                    <a href="/">
                        <img className="mx-2 h-auto max-w-[150px] w-full" src={logo} alt="logo" /> {/* Responsive logo */}
                    </a>
                </div>

                {/* Right side - Navigation tabs for larger screens */}
                <div className="hidden md:flex m-8 items-center justify-center gap-6 text-xl">
                    <Link to='/'>
                        <h2 className={`text-black hover:text-blue-600 ${location.pathname === '/' ? 'text-blue-600 font-bold' : ''}`}>Home</h2>
                    </Link>
                    <Link to='/projects'>
                        <h2 className={`text-black hover:text-blue-600 ${location.pathname === '/projects' ? 'text-blue-600 font-bold' : ''}`}>Projects</h2>
                    </Link>
                    <Link to='/services'>
                        <h2 className={`text-black hover:text-blue-600 ${location.pathname === '/services' ? 'text-blue-600 font-bold' : ''}`}>Services</h2>
                    </Link>
                    <a href="https://medium.com/@kavindupriyanath_78996" target="_blank" rel="noopener">
                        <h2 className={`text-black hover:text-blue-600 ${location.pathname === '/blog' ? 'text-blue-600 font-bold' : ''}`}>Blog</h2>
                    </a>
                    <button onClick={togglePopup} className="px-4 py-2 bg-blue-500 text-white rounded-lg">
                        <h2 className="text-black hover:text-white">Contact</h2>
                    </button>
                </div>

                {/* Notification */}
                {notification && (
                    <div className="fixed top-0 left-0 right-0 bg-green-500 text-white text-center py-2 z-20">
                        {notification}
                    </div>
                )}

                {/* Responsive hamburger icon */}
                <div className="md:hidden m-8">
                    <button onClick={toggleMenu} className="focus:outline-none">
                        <svg
                            className="w-6 h-6 text-black"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                        </svg>
                    </button>
                </div>

                {/* Mobile menu */}
                {isOpen && (
                    <div className="md:hidden absolute top-16 right-0 bg-white p-4 shadow-lg z-10 w-full flex flex-col items-center gap-4 text-xl">
                        <a href="/" className={`text-black ${location.pathname === '/' ? 'text-blue-600 font-bold' : ''}`} onClick={toggleMenu}>Home</a>
                        <a href="/projects" className={`text-black ${location.pathname === '/projects' ? 'text-blue-600 font-bold' : ''}`} onClick={toggleMenu}>Projects</a>
                        <a href="/services" className={`text-black ${location.pathname === '/services' ? 'text-blue-600 font-bold' : ''}`} onClick={toggleMenu}>Services</a>
                        <a href="https://medium.com/@kavindupriyanath_78996" className={`text-black ${location.pathname === '/blog' ? 'text-blue-600 font-bold' : ''}`} target='_blank' onClick={toggleMenu}>Blog</a>
                        <a onClick={togglePopup} className="text-black">Contact</a>
                    </div>
                )}
            </nav>
        </div>
    );
}

export default Navbar;
