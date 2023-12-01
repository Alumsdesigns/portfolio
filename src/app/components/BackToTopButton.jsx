// BackToTopButton.js
import React, { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } fixed bottom-8 right-8 bg-primary-500 p-3 rounded-full cursor-pointer`}
      onClick={scrollToTop}
    >
      {/* You can use an icon or any other representation for the button */}
      <span className="text-white">↑</span>
    </div>
  );
};

export default BackToTopButton;
