import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import './Header.css';
import logo from '../pic/jz-icon.jpeg';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/"><img src={logo} alt="Logo" /></Link>
      </div>
      <div className={`nav-container ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
        <div className="hamburger" onClick={toggleMobileMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <nav className="nav">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About Me</Link>
          <Link to="/projects" className="nav-link">Projects</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </nav>
      </div>
      <div className="side">
        <a href="https://github.com/Jzheng777" target="_blank" rel="noopener noreferrer"><FaGithub className='side-icon'/></a>
        <a href="https://www.linkedin.com/in/jason-zheng-b65b05266/" target="_blank" rel="noopener noreferrer"><FaLinkedinIn className='side-icon'/></a>
      </div>
    </header>
  );
};

export default Header;
