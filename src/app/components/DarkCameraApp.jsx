// VideoSnippet.jsx
import React from 'react';
import VideoContentCreationMLD from './VideoContentCreationMLD';
import Image from 'next/image';

const DarkCameraApp = () => {
  return (
    <div className="my-10">
      <h2 className="text-2xl font-bold mb-4">
        Video Snippet of Dark Camera App UI Creations
      </h2>
      <div className="mb-4">
        {/* Video */}
        <VideoContentCreationMLD />
      </div>
      <div>
        {/* Images */}
        <Image
          src="/images/TheBrixtonCod.png"
          alt="Image 3"
          width={1920}
          height={1080}
        />
        <Image
          src="/images/TheBrixtonCod.png"
          alt="Image 4"
          width={1920}
          height={1080}
        />
      </div>
    </div>
  );
};

export default DarkCameraApp;
