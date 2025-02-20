import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-primary/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="home" smooth={true} className="text-secondary font-bold text-xl cursor-pointer">
            DB
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="about" smooth={true} className="nav-link">About</Link>
            <Link to="skills" smooth={true} className="nav-link">Skills</Link>
            <Link to="experience" smooth={true} className="nav-link">Experience</Link>
            <Link to="projects" smooth={true} className="nav-link">Projects</Link>
            <Link to="education" smooth={true} className="nav-link">Education</Link>
            <Link to="contact" smooth={true} className="nav-link">Contact</Link>
          </div>

          <a 
            href="/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block px-4 py-2 border border-secondary text-secondary rounded hover:bg-secondary/10 transition-colors duration-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;