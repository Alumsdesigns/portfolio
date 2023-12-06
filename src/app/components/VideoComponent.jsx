import React from 'react';
import styles from './ProjectDetails1.module.css';

const VideoComponent = () => {
  return (
    <div className="bg-black md:h-auto grid md:grid-cols-2 text-start">
      {/* Left Column */}
      <div className="md:col-span-1 h-full md:h-auto flex flex-col justify-center text-white p-8 space-y-4">
        <div className="">
          <h3
            className={`text-2xl md:text-3xlfont-bold mb-4 ${styles['learning-list-title']}`}
          >
            Play the demo video of the prototype MVP showcasing
          </h3>
          <p
            className={` text-xl md:text-xl mb-2 ${styles['learning-list-text']}`}
          >
            1. Click & Collect UI Flow
          </p>
          <p className={`text-xl md:text-xl  ${styles['learning-list-text']}`}>
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
