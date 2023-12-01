'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const cvFilePath = '/DamarisCV.pdf';
  return (
    <section className="lg:py-6">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I am
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Damaris',
                1000,
                'UX Researcher',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            Welcome, I am dedicated to enhancing online experiences for all,
            achieving business goals, and prioritizing user-centric design.
            Explore my projects and LinkedIn.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            This website is a showcase in itself of my design and development
            skills, enjoy discovering interactive features as you engage with
            it. I am currently adding projects and improvements as I go.
          </p>
          <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
            I invite you to view projects below. Let's embark on a design
            transformation journey together!
          </p>
          <div>
            <Link
              href="https://www.linkedin.com/in/damaris-alum/"
              passHref
              className="px-6 inline-block py-3 rounded-full
              mr-4 bg-gradient-to-br from-primary-500 to-secondary-500
              hover:opacity-80  text-white"
            >
              {' '}
              Hire Me
            </Link>
            {/* <Link
              href="https://www.linkedin.com/in/damaris-alum/"
              passHref
              className="px-6 inline-block py-3 rounded-full mr-4 relative overflow-hidden"
            >
              <span className="relative z-10 bg-gradient-to-br from-primary-500 to-secondary-500 text-white">
                Hire Me
              </span>
              <span className="absolute inset-0 bg-gradient-to-br from-primary-500 to-secondary-500 opacity-0 hover:opacity-50 transition-opacity duration-300"></span>
            </Link> */}

            <a
              href={cvFilePath}
              download
              className="px-1 inline-block py-1 sm:border-5 rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
            >
              <div className="flex justify-center items-center">
                <button className="bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2 ">
                  Download CV
                </button>
              </div>
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/hero-image2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
