import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
            isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-white'
        }`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/">
                            <img 
                                src="/assets/Velpack_logo_fullcolor_rgb.png" 
                                alt="Velpack Logo" 
                                className="h-8 w-auto" 
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex space-x-4">
                        <Link to="/home" className="text-sm text-black hover:text-[#e81d2d]">Home</Link>
                        
                        <Link to="/aboutUs" className="text-sm text-black hover:text-[#e81d2d]">About Us</Link>
                        {/*   <Link to="/ourservices" className="text-sm text-black hover:text-[#e81d2d]">Our Services</Link> */}
                        <Link to="/certification" className="text-sm text-black hover:text-[#e81d2d]">Certifications</Link>
                        <Link to="/technology" className="text-sm text-black hover:text-[#e81d2d]">Technology</Link>
                        <Link to="/contactus" className="text-sm text-black hover:text-[#e81d2d]">Contact Us</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button 
                            onClick={toggleMenu} 
                            type="button" 
                            className="inline-flex items-center justify-center p-2 rounded-md text-black hover:text-[#e81d2d] focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMenuOpen ? (
                                <svg 
                                    className="block h-6 w-6" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    aria-hidden="true"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M4 6h16M4 12h16M4 18h16" 
                                    />
                                </svg>
                            ) : (
                                <svg 
                                    className="block h-6 w-6" 
                                    xmlns="http://www.w3.org/2000/svg" 
                                    fill="none" 
                                    viewBox="0 0 24 24" 
                                    stroke="currentColor" 
                                    aria-hidden="true"
                                >
                                    <path 
                                        strokeLinecap="round" 
                                        strokeLinejoin="round" 
                                        strokeWidth={2} 
                                        d="M6 18L18 6M6 6l12 12" 
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden absolute w-full bg-white/90 backdrop-blur-sm shadow-sm" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link 
                            to="/home" 
                            className="text-black hover:bg-gray-100 hover:text-[#e81d2d] block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Home
                        </Link>
                        <Link 
                            to="/aboutUs" 
                            className="text-black hover:bg-gray-100 hover:text-[#e81d2d] block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About Us
                        </Link>
                        {/*   <Link 
                            to="/ourservices" 
                            className="text-black hover:bg-gray-100 hover:text-[#e81d2d] block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Our Services
                        </Link> */}
                        <Link 
                            to="/certification" 
                            className="text-black hover:bg-gray-100 hover:text-[#e81d2d] block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Certifications
                        </Link>
                        <Link 
                            to="/technology" 
                            className="text-black hover:bg-gray-100 hover:text-[#e81d2d] block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Technology
                        </Link>
                        <Link 
                            to="/contactus" 
                            className="text-black hover:bg-gray-100 hover:text-[#e81d2d] block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
