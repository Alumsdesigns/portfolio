import React from 'react';
import Image from 'next/image';

const LearningList = () => {
  return (
    <div className="max-w-screen-xl mx-auto bg-black p-2 md:p-2 rounded-md shadow-md text-white">
      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-center">
        Final Thoughts
      </h3>
      <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">
        What I Learned
      </h2>
      <div className="pl-6 md:pl-0 text-center md:text-center">
        <p className="mb-2 md:text-lg">
          <span style={{ color: 'white' }}>&#10036;</span> Continue to trust the
          process.
        </p>
        <p className="mb-2 md:text-lg">
          <span style={{ color: 'white' }}>&#10036;</span> It is important to
          remember the end user perspective and how this contributes to the
          success of the final design and business goals.
        </p>
        <p className="mb-2 md:text-lg">
          <span style={{ color: 'white' }}>&#10036;</span> Details are important
          but do not get too caught up; it halts your design process.
        </p>
      </div>

      <h2 className="text-xl md:text-2xl font-bold mt-8 mb-4 text-center md:text-center">
        Next Steps
      </h2>
      <div className="pl-6 md:pl-0 text-center md:text-center">
        <p className="mb-2 md:text-lg">
          <span style={{ color: 'white' }}>&#10036;</span> It is impossible to
          design the perfect solution on your first try, continue to iterate and
          test, as this is essential to creating a stronger successful product.
        </p>
        <p className="mb-2 md:text-lg">
          <span style={{ color: 'white' }}>&#10036;</span> Wait for the MVP to
          go live and for additional feedback to expand and improve if
          necessary.
        </p>
      </div>

      {/* Cone image and "Thank you" line */}
      <div className="flex flex-col md:flex-row items-center md:justify-center mt-6">
        <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-0 text-center">
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
