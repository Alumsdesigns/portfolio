'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: 'Skills',
    id: 'skills',
    content: (
      <ul className="pl-2 flex flex-wrap gap-6">
        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">UX Researcher</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">UX Design</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">UI Design</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">User-centred Design</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Interaction design</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Information Visualization</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Adobe XD</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Figma</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Stanford Design Thinking</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">User Journeys</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Empathy Mapping</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Usability Testing</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Information Architecture</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Site Maps</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Page Layout</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Wireframing</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          Prototyping
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Mockups</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10"> Brand Identity</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Typography</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10"> Iconology</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Logo Design</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Digital Transformation</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">User Personas</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Responsiveness Web Design</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Problem Solving</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Brainstorming</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Innovation</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Communication</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Art Direction</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Agile Methodologies</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Data Analysis</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Accessibility WCAG</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Responsive Web Design</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10"> Shopify & Wix Development</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Cross-functional Collaboration</span>
        </li>

        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Heuristic Evaluation</span>
        </li>

        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">User-Centered Design</span>
        </li>
        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Photoshop</span>
        </li>
        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">Motion Design (Animation)</span>
        </li>
        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Information Design</span>
        </li>
        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">A/B Testing</span>
        </li>
        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">Content Strategy</span>
        </li>
        <li className="relative group bg-secondary-500  text-white px-2 py-2 border-secondary-500 animate-shine border-4 rounded-lg">
          <span className="relative z-10">User Analytics</span>
        </li>
        <li className="relative group bg-primary-500  text-white px-2 py-2 border-primary-500 animate-shine border-4 r rounded-lg">
          <span className="relative z-10">
            User Testing and Research Methods
          </span>
        </li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-none text-white opacity-70 pl-2 text-base lg:text-lg">
        <li>Google Coursera UX UI Design Bootcamp</li>
        <li>Business Degree from MSG Business School, London</li>
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
          View all Google certificates on my linkedin and contact me their
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
        {/* <div className="md:grid md:grid-cols-2 gap-8 items-center"> */}
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
        <div className=" md:mt-0 text-left flex flex-col h-full ">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
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
      <div className="flex flex-row justify-start mt-8  text-2xl font-bold lg:text-lg">
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
