'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  const cvFilePath = '/DamarisCV.pdf';
  return (
    <section className="py-4 pb-4 lg:py-20 lg:pb-10 m-0">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-2xl md:text-4xl lg:text-5xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
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
            I am passionate UX/UI designer, dedicated to creating inclusive
            digital spaces. I believe design can drive positive change, solving
            real-world problems. Let us connect and embark on a transformative
            design journey together.
          </p>
          <div>
            {/* <Link
              href="https://www.linkedin.com/in/damaris-alum/"
              passHref
              className="px-6 inline-block py-3 rounded-full
              mr-4 bg-gradient-to-br from-primary-500 to-secondary-500
              hover:opacity-80  text-white"
            >
              {' '}
              Hire Me
            </Link> */}
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
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative overflow-hidden">
            <Image
              src="/images/hero-image2.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={500}
              height={500}
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
