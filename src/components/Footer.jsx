import React from 'react';
import { FaLinkedin, FaYoutube, FaTwitter } from 'react-icons/fa';

function Footer({togglePopup}) {
  return (
    <footer className="w-full bg-gray-900 text-white pb-2 pt-4">
      {/* First Row - Social Media Links */}
      <div className="flex justify-center space-x-6 mb-4">
        <a href="https://www.linkedin.com/in/kavindu-priyanath/" target="_blank" rel="noopener" className="text-2xl hover:text-blue-500">
          <FaLinkedin />
        </a>
        <a href="https://www.youtube.com/watch?v=0VlOiQCyMzk&feature=youtu.be" target="_blank" rel="noopener" className="text-2xl hover:text-red-500">
          <FaYoutube />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener" className="text-2xl hover:text-blue-400">
          <FaTwitter />
        </a>
      </div>

      {/* Second Row - Navigation Links */}
      <div className="flex justify-center space-x-6 mb-2">
        <a href="/" className="hover:text-blue-400">Home</a>
        <a href="/projects" className="hover:text-blue-400">Projects</a>
        <a href="/services" className="hover:text-blue-400">Services</a>
        <a onClick={togglePopup} className="hover:text-blue-400">Contact</a>
      </div>

      {/* Third Row - Copyright Text */}
      <div className="text-center text-gray-500">
        © {new Date().getFullYear()} Kavindu Priyanath. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
