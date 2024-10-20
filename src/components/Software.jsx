import React from 'react';
import { SOFTWARE } from '../constants';
import { FiExternalLink } from "react-icons/fi";

const Software = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6">
      {SOFTWARE.map((software, index) => (
        <div
          key={index}
          className="flex flex-col max-w-[300px] w-full rounded-2xl overflow-hidden shadow-lg bg-white p-6 transform transition-transform duration-300 hover:scale-105"
        >
          {/* Title */}
          <h2 className="text-xl font-bold mb-2 text-black text-center">{software.title}</h2>

          {/* Image */}
          <img
            className="w-full h-48 object-cover mb-4"
            src={software.image}
            alt="Project Thumbnail"
          />

          {/* Description */}
          <p className="text-gray-700 text-justify text-base mb-4">{software.description}</p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {software.tags.map((tag, index) => (
              <span
                key={index}
                className="inline-block bg-blue-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* GitHub Button */}
          <a
            href={software.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex inline-block text-center text-black py-2 pl-2 rounded hover:text-blue-600"
          >
            <span className='mr-1'>View on GitHub </span> <FiExternalLink className='mt-1' />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Software;
