import React, { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageList = ({ images : games, onImageClick }) => {
  const containerRef = useRef(null);

  // Function to handle wheel scroll for horizontal scrolling
  const handleScroll = (e) => {
    e.preventDefault(); // Prevent default vertical scroll
    e.currentTarget.scrollLeft += e.deltaY; // Scroll horizontally
  };

  // Function to scroll left
  const scrollLeft = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft -= 300; // Adjust scroll distance as needed
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (containerRef.current) {
      containerRef.current.scrollLeft += 300; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="relative flex items-center justify-center w-full h-full">
      {/* Left arrow */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
      >
        <FaArrowLeft />
      </button>

      {/* Image container */}
      <div
        className="w-[360px] sm:w-[600px] md:w-[720px] lg:w-[960px] overflow-x-scroll flex gap-4 scrollbar-hide"
        onWheel={handleScroll}
        ref={containerRef} // Reference to the container
      >
        {games.map((gameData, index) => (
          <div key={index} className="flex-shrink-0 cursor-pointer">
            <img
              src={gameData.image}
              alt={`img-${index}`}
              onClick={() => onImageClick(gameData)}  // Handle image click
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = ''; 
                e.target.classList.add('bg-gray-300'); 
              }}
              className="h-20 w-20 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>

      {/* Right arrow */}
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ImageList;
