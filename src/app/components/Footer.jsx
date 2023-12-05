import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-white border-l-transparent border-r-transparent text-white bg-black">
      <div className="container p-12 flex justify-between items-center">
        <Image
          src="/images/logofinal.png"
          alt="Logo"
          width={50}
          height={50}
          priority
          layout="fixed"
        />{' '}
        <div className="text-slate-100">
          <p>&copy; {new Date().getFullYear()} Damaris Alum</p>{' '}
          <p>Designed by Damaris Alum</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
