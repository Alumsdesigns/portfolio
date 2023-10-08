'use client';
import React, { useState } from 'react';
import LinkedinIcon from '../../../public/linkedin-icon.svg';
import Link from 'next/link';
import Image from 'next/image';
import styles from './ContactMe.module.css';

const ContactMe = () => {
  return (
    <section
      id="contact"
      className="grid justify-center items-center my-10 md:my-20 lg:my-30 gap-4 relative"
    >
      <div className="z-10 text-center">
        <h5 className="text-4xl font-bold text-white mb-4">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">Let's Collaborate</p>
        <div className="socials flex justify-center gap-2 mb-6">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative inline-block ${styles.linkedinIcon}`}
          >
            <Image
              src={LinkedinIcon}
              alt="Linkedin Icon"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;