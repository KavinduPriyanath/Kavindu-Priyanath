import React, { useState, useEffect, useRef } from 'react';
import Hero from './Hero';
import About from './About';
import Technologies from './Technologies';
import Experience from './Experience';
import Tictactoe from './Games/TikTakToe/Tictactoe';
import { GiTicTacToe } from "react-icons/gi";

function Home() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const experienceRef = useRef(null);

  // Toggle the popup window
  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  // Handle scroll to make button visible only after scrolling past Experience
  useEffect(() => {
    const handleScroll = () => {
      const experiencePosition = experienceRef.current?.getBoundingClientRect().top;
      if (experiencePosition && experiencePosition < window.innerHeight) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <Hero togglePopup={togglePopup} />
      <About />
      <div ref={experienceRef}>
        <Experience />
      </div>
      <Technologies />

      {/* Button to open Tic-Tac-Toe popup, only visible after scrolling past Experience */}
      {showButton && (
        <button
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition-all"
          onClick={togglePopup}
        >
          <GiTicTacToe className='text-[25px]'/>
        </button>
      )}

      {/* Popup Window */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg relative w-96">
            <button
              className="absolute top-2 right-2 text-black hover:text-red-500"
              onClick={togglePopup}
            >
              ✖
            </button>
            <Tictactoe/>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
