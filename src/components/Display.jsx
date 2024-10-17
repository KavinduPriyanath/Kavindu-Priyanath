import React, { useState } from 'react';
import { FaExternalLinkAlt } from "react-icons/fa";

const Display = ({ media, title, description, page }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="flex flex-col md:flex-row items-center justify-center my-8 p-4 bg-gray-100 rounded-lg">
      {/* Left side: Image or Video */}
      <div className="w-full md:w-1/2 p-4 flex justify-center md:justify-end">
        {media.type === 'image' ? (
          !imageError ? (
            <img
              src={media.src}
              alt="Media content"
              className="w-full h-auto rounded-lg object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-64 bg-gray-300 rounded-lg"></div>
          )
        ) : media.type === 'youtube' ? (
          <iframe
            className="rounded-lg w-full h-auto md:w-[600px] md:h-[320px]"
            src={media.src}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <video src={media.src} controls className="w-full h-auto rounded-lg"></video>
        )}
      </div>

      {/* Right side: Title, Description, and Button */}
      <div className="w-full md:w-1/2 p-4 flex flex-col self-start items-start">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
        <p className="text-lg text-gray-600 mb-4">{description}</p>
        <a href={page} target='_blank' className='mt-10'>
        <button className="flex items-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300">
          <span className='font-bold text-[16px]'>Check the Game</span> <FaExternalLinkAlt className="ml-2 text-[16px]" />
        </button>
        </a>
      </div>
    </div>
  );
};

export default Display;
