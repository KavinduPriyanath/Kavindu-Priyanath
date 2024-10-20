import React, { useRef, useState, useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const ImageList = ({ images: games, onImageClick }) => {
  const containerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const checkScrollButtons = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setCanScrollLeft(scrollLeft > 0);
        setCanScrollRight(scrollLeft + clientWidth < scrollWidth);
      }
    };

    checkScrollButtons(); // Initial check

    // Add a listener to update scroll state when the user scrolls
    containerRef.current.addEventListener('scroll', checkScrollButtons);

    // Cleanup the event listener
    return () => {
      if (containerRef.current) {
        containerRef.current.removeEventListener('scroll', checkScrollButtons);
      }
    };
  }, []);

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

      {/* Image container */}
      <div
        className="w-[360px] sm:w-[600px] md:w-[720px] lg:w-[960px] overflow-x-scroll flex gap-4 scrollbar-hide px-8" // Added px-8
        onWheel={handleScroll}
        ref={containerRef} // Reference to the container
      >
      {games.map((gameData, index) => (
        <div key={index} className="flex-shrink-0 cursor-pointer">
          <img
            src={gameData.image}
            alt={`img-${index}`}
            onClick={() => onImageClick(gameData)} // Handle image click
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '';
              e.target.classList.add('bg-gray-300');
            }}
            className="h-20 w-20 object-cover rounded-lg transition-transform duration-300 transform hover:scale-110"
          />
        </div>
      ))}
    </div>

    </div>
  );
};

export default ImageList;
