// LearningList.jsx
import React from 'react';
import Image from 'next/image';
import styles from './ProjectDetails1.module.css';

const LearningList = () => {
  return (
    <div
      className={`max-w-screen-xl mx-auto bg-black p-2 md:p-2 rounded-md shadow-md md:mt-20 mt-10 pt-10 ${styles['white-text']}`}
    >
      <h5
        className={`text-4xl md:text-4xl font-bold mb-4 text-center ${styles['project-details-title']}`}
      >
        Final Thoughts
      </h5>
      <h2
        className={`text-3xl md:text-3xl mb-4 font-bold text-center ${styles['project-details-title']}`}
      >
        What I Learned
      </h2>
      <div
        className={`pl-6 md:pl-0 text-center md:text-center text-xl md:text-xl ${styles['learning-list-text']}`}
      >
        <p className="mb-2">
          <span>&#10036;</span> Continue to trust the process.
        </p>
        <p className="mb-2">
          <span>&#10036;</span> It is important to remember the end user
          perspective and how this contributes to the success of the final
          design and business goals.
        </p>
        <p className="mb-2">
          <span>&#10036;</span> Details are important but do not get too caught
          up, it halts your design process.
        </p>
      </div>

      <h2
        className={`text-3xl md:text-3xl font-bold mt-8 mb-4 text-center md:text-center ${styles['project-details-title']}`}
      >
        Next Steps
      </h2>
      <div
        className={`pl-6 md:pl-0 text-center md:text-center  text-xl md:text-xl  ${styles['learning-list-text']}`}
      >
        <p className="mb-2">
          <span>&#10036;</span> It is impossible to design the perfect solution
          on your first try, continue to iterate and test, as this is essential
          to creating a stronger successful product.
        </p>
        <p className="mb-2">
          <span>&#10036;</span> Wait for the MVP to go live and for additional
          feedback to expand and improve if necessary.
        </p>
      </div>

      {/* Cone image and "Thank you" line */}
      <div className="flex flex-col md:flex-row items-center md:justify-center mt-6">
        <h3
          className={`text-3xl md:text-3xl font-bold mb-4 md:mb-0 text-center ${styles['project-details-title']}`}
        >
          Thank you, all feedback welcomed
        </h3>
        <Image
          src="/images/cone.png"
          alt="Cone"
          width={48}
          height={68}
          className="pl-4"
        />
      </div>
    </div>
  );
};

export default LearningList;
