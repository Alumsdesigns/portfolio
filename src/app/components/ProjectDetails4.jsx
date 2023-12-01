import React, { useState, useRef } from 'react';
import ContactMe from './ContactMe';
import Footer from './Footer';
import Image from 'next/image';
import VideoContentCreationMLD from './VideoContentCreationMLD';

const ProjectDetails4 = ({ onClose }) => {
  const [projectIndex, setProjectIndex] = useState(0); // Initial project index

  const projects = [
    {
      id: 0,
      title: 'Introduction',
      description:
        'As I progress in building my portfolio, I am eager to share glimpses of my diverse projects, spanning from e-commerce websites to cutting-edge video prototypes.',
    },
    {
      id: 1,
      title: 'Aqua Ofosuene - E-commerce',
      description:
        'Delving into my thought processes, one noteworthy project was with a black owned SME of Aqua Ofosuene, on her e-commerce platform site called mylocaldressmaker. This was my first freelance mission and it saw me not only be the Lead UX UI Designer & Researcher, but also a content creator and strategic business analyst. Facing a site lacking priorities, categorization, and clear organization. I enjoyed collaborating closely with the owner to assist her in clarifying her dreams and aligning them with her business goals, demonstrating this on her online website and across social media platforms. Together, we unraveled a perplexing navigation flow, defining clear business goals. This collaboration resulted in a strategic separation of concerns, prioritized navigation, and a streamlined content hierarchy. Although "www.mylocaldressmaker.com" is no longer online, you can explore snapshots of its past below and on web.archive.org. Aqua Ofosuene is very happy to be contacted as a reference.',
    },
    {
      id: 2,
      title: 'Brixton Chip + Fish Shop',
      description:
        'Description for the second project (Chip + Fish Shop SME) goes here.',
    },
    {
      id: 3,
      title: 'Figma UI Prototype - Dark Camera App',
      description:
        'Description for the third project (Figma UI Prototype) goes here.',
    },
  ];

  const projectRefs = {
    project0: useRef(null),
    project1: useRef(null),
    project2: useRef(null),
    project3: useRef(null),
  };

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

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

      <div className="w-full h-auto flex flex-col mt-10 text-center max-w-2xl mx-auto">
        {/* Index */}
        <div className="text-lg font-bold mb-4">
          {projects.map((project, index) => (
            <button
              key={index}
              className="mr-4 text-white underline"
              onClick={() => setProjectIndex(index)}
            >
              {project.title}
            </button>
          ))}
        </div>

        {/* Project details */}
        <div ref={projectRefs.project0} className="project-details">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            {projects[projectIndex].title}
          </h3>
          <p>{projects[projectIndex].description}</p>
        </div>
      </div>

      <div className="w-full h-full overflow-y-scroll flex flex-col">
        {/* Image Section */}
        <Image
          src="/images/"
          alt="Project Image"
          width={1920}
          height={1080}
          layout="responsive"
          className="w-full h-full"
        />

        {/* Video Section */}
        {projectIndex === 1 && (
          <div className="flex items-center justify-center md:flex-row h-full mt-10 mb-20">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <VideoContentCreationMLD />
            </div>
          </div>
        )}

        {/* ContactMe and Footer Sections */}
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default ProjectDetails4;
