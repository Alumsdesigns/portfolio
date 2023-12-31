import React from 'react';
import styles from './ProjectDetails1.module.css';

const VideoComponent = () => {
  return (
    <div className="bg-black md:h-auto w-full grid md:grid-cols-2 text-start">
      {/* Left Column */}
      <div className="md:col-span-1 h-full md:h-auto flex flex-col justify-center text-white p-4 sm:p-8 space-y-4">
        <div className="">
          <h3 className={`font-bold mb-4 ${styles['video-title']}`}>
            Play the demo video
          </h3>
          <p className={`mb-2 ${styles['learning-list-text']}`}>
            1. Click & Collect UI Flow
          </p>
          <p className={`mb-2 ${styles['learning-list-text']}`}>
            2. Reservations / Bookings & Other User Interfaces
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 h-full md:h-auto flex items-center justify-center p-4 md:p-0">
        <div className="max-w-full max-h-full overflow-hidden">
          <video controls className="w-full h-full object-contain">
            <source src="/asportfolio.mp4" type="video/mp4" />
            Your browser does not support the video mp4.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
