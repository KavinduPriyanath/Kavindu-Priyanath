import React, { useState } from 'react';
import ImageList from './ImageList';
import Display from './Display';
import { GAMES } from '../constants';

function Projects() {
  const [selectedMedia, setSelectedMedia] = useState({
    type: 'youtube',
    src: GAMES[0].link,
    title: GAMES[0].title,
    description: GAMES[0].description,
    page: GAMES[0].game
  });

  const handleImageClick = (media) => {
    setSelectedMedia({
      type: 'youtube',  // Update to check if it's 'image' or 'youtube'
      src: media.link,
      title: media.title,
      description: media.description,
      page: media.game
    });
  };

  return (
    <div className="p-4 mt-40 mb-20">
      <Display 
        media={selectedMedia}  
        title={selectedMedia.title}
        description={selectedMedia.description}
        page={selectedMedia.page}
      />
      <ImageList 
        images={GAMES} 
        onImageClick={handleImageClick} 
      />
    </div>
  );
}


export default Projects;
