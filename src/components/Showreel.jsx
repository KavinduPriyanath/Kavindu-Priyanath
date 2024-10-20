import React from 'react';

function Showreel() {
  return (
    <div className="flex flex-col md:flex-row justify-center bg-blue-100 rounded-2xl space-x-0 md:space-x-20 mt-20 px-4 py-8 max-w-[1000px] mx-auto h-full"> {/* Changed to flex-col for mobile */}
      <div className="flex flex-col mt-0 text-left text-xl text-black w-full md:w-3/5"> {/* Text takes 2/3 of width on md+ */}
        <p>You can checkout my showreel which also contains some games I made for different clients.</p>
      </div>
      <div className="flex items-center mt-5 md:mt-0 md:w-1/5"> {/* Button takes the rest with gap */}
        <a
          href="https://www.youtube.com/embed/0VlOiQCyMzk" // Replace with your actual YouTube link
          target="_blank"
          rel="noopener"
          className="bg-red-500 text-center text-white py-2 px-4 rounded hover:bg-red-400 transition duration-300 hover:font-bold" // Button full width
        >
          Watch On Youtube
        </a>
      </div>
    </div>
  );
}

export default Showreel;
