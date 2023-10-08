import React from 'react';
import Link from 'next/link';
import ContactMe from './ContactMe';
import Footer from './Footer';

const ProjectDetails1 = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex flex-col items-center justify-center bg-[#121212] text-white">
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
        <img
          src="/images/FinialNovADAS.jpg"
          alt="Project Image"
          className="w-full"
        />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails1;
