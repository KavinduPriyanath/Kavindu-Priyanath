import { useState } from 'react';

const Accordian = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleDetails = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full max-w-lg mx-auto p-4">
      {/* Header */}
      <h2
        className="text-2xl font-semibold cursor-pointer text-blue-600"
        onClick={toggleDetails}
      >
        More about me....
      </h2>

      {/* Details Section (conditionally rendered) */}
      {isExpanded && (
        <div className="mt-4 text-gray-700">
          <p>
          Hi it’s Kavindu Again. I think I haven’t said enough about me. I think I forgot to tell you about what I do at my free time. I play a lot of games. Here are my top 3 most played PC games.
          </p>
          <p className="mt-2">
            In my free time, I explore new technologies, experiment with game mechanics, and refine my skills in 3D modeling and design.
          </p>
        </div>
      )}
    </div>
  );
};

export default Accordian;
