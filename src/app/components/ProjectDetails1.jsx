import React from 'react';
import Link from 'next/link';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Image from 'next/image';
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

      <div className="w-full h-full overflow-y-scroll">
        {/* VideoComponent in a two-column layout */}
        {/* <div className="container mx-auto p-4 md:p-8 h-full flex flex-col ">
          <div className="flex flex-col md:flex-col h-full"> */}
        {/* Left Column (Title and Flows) */}
        {/* <div className="md:w-1/4 flex-1 flex-col p-4 md:p-8">
              <h1 className="text-4xl font-bold mb-4 font-playfair text-white">
                Video Prototype
              </h1>
              <p className="text-lg mb-2">1. Click & Collect Flow</p>
              <p className="text-lg">2. Booking Flow</p>
            </div> */}

        {/* Right Column (VideoComponent) */}
        {/* <div className="md:w-1/2 flex-1 flex">
              <VideoComponent />
            </div>
          </div>
        </div> */}

        <Image
          src="/images/FinalNoVideo.jpg"
          alt="Project Image"
          width={1920} // Set the width of the image (adjust to your image's actual width)
          height={1080} // Set the height of the image (adjust to your image's actual height)
          layout="responsive" // This allows the image to fill its container while maintaining its aspect ratio
          className="w-full h-full" // Apply Tailwind CSS classes to make the image fill the container
        />
        <div className="flex flex-row items-center justify-center md:flex-row h-full">
          {/* Left Column (Title and Flows) */}
          {/* <div className="md:w-1/2  p-4">
            <h1 className="text-4xl font-bold mb-4 font-playfair text-white">
              Video Prototype
            </h1>
            <p className="text-lg mb-2">1. Click & Collect Flow</p>
            <p className="text-lg">2. Booking Flow</p>
          </div> */}

          {/* Right Column (VideoComponent) */}
          <div className="md:w-1/2 flex items-center justify-center">
            <VideoComponent />
          </div>
        </div>
        <Image
          src="/images/FinialVideo.jpg"
          alt="Project Image"
          width={1920} // Set the width of the image (adjust to your image's actual width)
          height={1080} // Set the height of the image (adjust to your image's actual height)
          layout="responsive" // This allows the image to fill its container while maintaining its aspect ratio
          className="w-full h-full" // Apply Tailwind CSS classes to make the image fill the container
        />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails1;
