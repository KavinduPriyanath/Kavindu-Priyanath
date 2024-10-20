import React, { useState } from 'react';
import ImageList from './ImageList';
import Display from './Display';
import { GAMES } from '../constants';
import Software from './Software';
import Showreel from './Showreel';

function Projects() {
  // State to manage selected tab ('games' or 'software')
  const [selectedTab, setSelectedTab] = useState('games');

  const [selectedMedia, setSelectedMedia] = useState({
    type: 'youtube',
    src: GAMES[0].link,
    title: GAMES[0].title,
    description: GAMES[0].description,
    page: GAMES[0].game
  });

  const handleImageClick = (media) => {
    setSelectedMedia({
      type: 'youtube',
      src: media.link,
      title: media.title,
      description: media.description,
      page: media.game
    });
  };

  return (
    <div className="p-4 mt-20 mb-20">
      {/* Tabs */}
      <div className="flex justify-center space-x-4 mb-10">
        <button
          className={`py-2 px-4 border-b-2 ${selectedTab === 'games' ? 'border-blue-500 text-blue-500 font-bold' : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-500'}`}
          onClick={() => setSelectedTab('games')}
        >
          Games
        </button>
        <button
          className={`py-2 px-4 border-b-2 ${selectedTab === 'software' ? 'border-blue-500 text-blue-500 font-bold' : 'border-transparent text-gray-600 hover:text-blue-500 hover:border-blue-500'}`}
          onClick={() => setSelectedTab('software')}
        >
          Software
        </button>
      </div>

      {/* Conditionally render the content based on the selected tab */}
      {selectedTab === 'games' ? (
        <div>
          <Display 
            media={selectedMedia}  
            title={selectedMedia.title}
            description={selectedMedia.description}
            page={selectedMedia.page}
          />
          <ImageList 
            images={GAMES} 
            onImageClick={handleImageClick} 
            selectedMedia={selectedMedia}
          />
          <Showreel />
        </div>
      ) : (
        <Software />
      )}
    </div>
  );
}

export default Projects;
