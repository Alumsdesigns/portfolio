'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import ProjectDetails1 from './ProjectDetails1';
import ProjectDetails2 from './ProjectDetails2';
import ProjectDetails3 from './ProjectDetails3';

const projectsData = [
  {
    id: 1,
    title: 'First every prtoject',
    description: 'Full case study transforming the CX in the food industry',
    image: '/images/projects/1.png',
    tag: ['All', 'Mobile'],
    previewUrl: 'src/app/components/ProjectDetails1.jsx',
  },
  {
    id: 2,
    title: 'Coming soon.....',
    description: 'Different UI Design work examples & videos to be added soon',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: 'src/app/components/ProjectDetails3.jsx',
  },
  {
    id: 3,
    title: 'Coming soon..... ',
    description: 'Different Case Studies of UX UI Research to be added soon',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    previewUrl: 'src/app/components/ProjectDetails2.jsx',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [selectedProject, setSelectedProject] = useState(null);

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  const handleProjectCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects">
      <h2 className="text-center font-bold text-white mt-4 mb-8 md:mb-12 text-2xl md:text-3xl lg:text-4xl">
        View My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6 text-center">
        <ProjectTag
          onClick={() => handleTagChange('All')}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={() => handleTagChange('Web')}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={() => handleTagChange('Mobile')}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              onClick={() => handleProjectCardClick(project)}
              className="text-center"
            />
          </motion.li>
        ))}
      </ul>
      {/* Render project detail component conditionally */}
      {selectedProject && (
        <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-80 text-center">
          {selectedProject.id === 1 && (
            <ProjectDetails1 onClose={handleClose} />
          )}
          {selectedProject.id === 2 && (
            <ProjectDetails2 onClose={handleClose} />
          )}
          {selectedProject.id === 3 && (
            <ProjectDetails3 onClose={handleClose} />
          )}
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
