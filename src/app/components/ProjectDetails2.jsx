import React from 'react';

const ProjectDetails2 = ({ onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center">
      <div className="relative bg-[#121212] text-white p-8 rounded-md mx-4 md:mx-auto max-w-md">
        <div
          className="absolute top-2 right-2 cursor-pointer bg-gray-300 rounded-full p-1 hover:bg-white"
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
        <h2 className="text-2xl font-bold mt-4 text-center">
          Exciting UX Design Project Number 2 is coming soon!
        </h2>
        <p className="text-lg mt-4 mb-4 text-center">
          While you're waiting, take a look at the first project my Mobile
          Alumnus Steakhouse & Bar App, in Projects. <br />
          <br />
          If you have any questions or want to discuss your UX design needs,
          please don't hesitate to reach out to us.
        </p>
      </div>
    </div>
  );
};

export default ProjectDetails2;
