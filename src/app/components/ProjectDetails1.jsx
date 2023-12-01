import React from 'react';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Image from 'next/image';
import LearningList from './LearningList';
import VideoComponent from './VideoComponent';

const ProjectDetails1 = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-black text-white">
      <div
        className="absolute top-4 right-4 cursor-pointer bg-gray-300 rounded-full p-1 hover:bg-white"
        onClick={onClose}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="green"
          className="h-6 w-6 font-bold text-gray-600 hover:text-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div className="w-full h-full overflow-y-scroll flex flex-col">
        {/* Image Section */}
        <Image
          src="/images/FinalNoVideo.jpg"
          alt="Project Image"
          width={1920}
          height={1080}
          priority
          layout="responsive"
          className="w-full h-full"
        />

        {/* Video Section */}
        <div className="flex items-center justify-center md:flex-row h-full mt-10 mb-20">
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <VideoComponent />
          </div>
        </div>

        {/* Second Image Section */}
        <LearningList />

        {/* ContactMe and Footer Sections */}
        <ContactMe />
        <Footer className="bg-black text-white" />
      </div>
    </div>
  );
};

export default ProjectDetails1;
