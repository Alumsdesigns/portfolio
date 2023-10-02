'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';
import ProjectPage from './ProjectPage'; // Import the ProjectPage component

const projectsData = [
  {
    id: 1,
    title: 'Mobile Alumnus Steakhouse & Bar App',
    description: 'Transforming the CX in the food industry',
    image: '/images/projects/1.png',
    tag: ['All', 'Mobile'],
    previewUrl: 'src/app/components/ProjectPage.jsx',
  },
  {
    id: 3,
    title: 'Coming soon..... ',
    description:
      'E-commerce Application - My local Dressmakers e-commerce UX UI makeover',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Coming soon..... ',
    description: 'Different UI Design examples & videos',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  // {
  //   id: 4,
  //   title: "Food Ordering Application",
  //   description: "Project 4 description",
  //   image: "/images/projects/4.png",
  //   tag: ["All", "Mobile"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 5,
  //   title: "React Firebase Template",
  //   description: "Authentication and CRUD operations",
  //   image: "/images/projects/5.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
  // {
  //   id: 6,
  //   title: "Full-stack Roadmap",
  //   description: "Project 5 description",
  //   image: "/images/projects/6.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "/",
  //   previewUrl: "/",
  // },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isProjectPageVisible, setIsProjectPageVisible] = useState(false); // Add state for the ProjectPage component
  const [selectedProject, setSelectedProject] = useState(null); // Store the selected project

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
    setSelectedProject(project); // Set the selected project
    setIsProjectPageVisible(true); // Show the ProjectPage component
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
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
              onClick={() => handleProjectCardClick(project)} // Add click handler
            />
          </motion.li>
        ))}
      </ul>
      {/* Render ProjectPage component conditionally */}
      {isProjectPageVisible && selectedProject && (
        <ProjectPage
          project={selectedProject}
          onClose={() => setIsProjectPageVisible(false)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;

{
  /* <section id="projects">
<h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
  My Projects
</h2>
<div className="text-white flex flex-row justify-center items-center gap-2 py-6">
  <ProjectTag
    onClick={handleTagChange}
    name="All"
    isSelected={tag === 'All'}
  />
  <ProjectTag
    onClick={handleTagChange}
    name="Web"
    isSelected={tag === 'Web'}
  />
  <ProjectTag
    onClick={handleTagChange}
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
        previewUrl={project.previewUrl}
      />
    </motion.li>
  ))}
</ul>
</section> */
}
