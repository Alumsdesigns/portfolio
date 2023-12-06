'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { motion, useAnimation } from 'framer-motion';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="pl-2 flex flex-wrap justify-center md:justify-start gap-6">
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">UX Researcher</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">UX Design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">UI Design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">User-centred Design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-500 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Interaction design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Information Visualization</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Adobe XD</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Figma</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Stanford Design Thinking</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">User Journeys</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Empathy Mapping</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Usability Testing</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Information Architecture</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Site Maps</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Page Layout</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Wireframing</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          Prototyping
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Mockups</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10"> Brand Identity</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Typography</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10"> Iconology</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Logo Design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Digital Transformation</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">User Personas</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Responsiveness Web Design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Problem Solving</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Brainstorming</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Innovation</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Communication</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Art Direction</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-700 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Agile Methodologies</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-600 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Data Analysis</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Accessibility WCAG</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Responsive Web Design</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10"> Shopify & Wix Development</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Cross-functional Collaboration</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-700 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Heuristic Evaluation</span>
        </motion.li>

        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-600 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">User-Centered Design</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-500 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Photoshop</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-500 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Motion Design (Animation)</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-500 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Information Design</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-500 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">A/B Testing</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-500 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">Content Strategy</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-secondary-500 text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">User Analytics</span>
        </motion.li>
        <motion.li
          whileHover={{
            y: [-2, 2, -2, 2, -1.5, 1.5, -0.5, 0.5, 0],
          }}
          transition={{
            duration: 2,
            ease: 'linear',
            loop: Infinity,
          }}
          className="relative group bg-primary-500 text-white px-2 py-2 border-primary-500 animate-shine border-4 rounded-lg text-center"
        >
          <span className="relative z-10">
            User Testing and Research Methods
          </span>
        </motion.li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-none text-white opacity-70 pl-2 text-base lg:text-lg">
        <li>
          <span style={{ color: 'white' }}>&#10036;</span> Google Coursera UX UI
          Design Bootcamp
        </li>
        <li>
          <span style={{ color: 'white' }}>&#10036;</span> Business Degree from
          MSG Business School, London
        </li>
      </ul>
    ),
  },
  {
    title: 'Certifications',
    id: 'certifications',
    content: (
      <>
        <ol className="list-decimal text-white opacity-70 pl-2 text-base lg:text-lg">
          <li> Google Coursera: Responsive Web Design in Adobe XD</li>
          <li>
            Google Coursera: Create High-Fidelity Designs & Prototypes in Figma
          </li>
          <li>
            {' '}
            Google Coursera: Conduct UX Research and Test Early Concepts{' '}
          </li>
          <li>
            {' '}
            Google Coursera: Build Wireframes and Low-Fidelity Prototypes
          </li>
          <li>
            Google Coursera: Start the UX Design Process- Empathize, Define, and
            Ideate
          </li>
          <li> Google Coursera: Foundations of User Experience (UX) Design</li>
        </ol>
        <p className="text-white opacity-70">
          View all Google certificates on my linkedin and connect me their
        </p>
      </>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white mb-4">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 pb-4">
        <div className="flex flex-col items-center justify-center gap-4">
          <Image
            src="/images/about-image2.png"
            alt="aboutme"
            width={350}
            height={350}
          />
          <Image
            src="/images/about-image4.png"
            alt="aboutme"
            width={350}
            height={350}
          />
        </div>
        <div className=" md:mt-0 mt-4 text-left flex flex-col h-full">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-white opacity-70 lg:text-lg">
            Hi, I am Damaris, and on a mission to elevate user experiences
            through the fusion of UX Research and UI Design. My unwavering
            passion lies in creating inclusive, equitable digital spaces where
            accessibility is not just a checkbox but a guiding principle.
            <br /> <br />
            I am driven by the profound belief that design can be a force for
            positive change, solving real-world problems and enhancing peoples
            lives. Whether working independently or collaboratively, I am
            relentless in my pursuit of crafting exceptional products that
            everyone can cherish.
            <br /> <br />
            Beyond the realm of pixels and interfaces, I bring a creative edge
            to my work.
            <br /> <br />
            To the left, you will find a glimpse of my mood board and collage,
            reflecting the diverse range of interests that fuel my creativity.
            These influences can infuse my approach to design, making it all the
            more vibrant and user-focused.
            <br /> <br />
            I eagerly anticipate the opportunity to contribute my skills and
            vision to new projects, adding to a portfolio of work that we can
            all take immense pride in.
            <br /> <br />
            Let us connect and embark on a journey of transformative design
            together.
          </p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row justify-start mt-8 text-2xl md:text-3xl lg:text-4xl font-bold">
        <TabButton
          selectTab={() => handleTabChange('skills')}
          active={tab === 'skills'}
        >
          {' '}
          Skills{' '}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('education')}
          active={tab === 'education'}
        >
          {' '}
          Education{' '}
        </TabButton>
        <TabButton
          selectTab={() => handleTabChange('certifications')}
          active={tab === 'certifications'}
        >
          {' '}
          Certifications{' '}
        </TabButton>
      </div>

      <div className="m-8 pb-8">
        {TAB_DATA.find((t) => t.id === tab).content}
      </div>
    </section>
  );
};

export default AboutSection;
