// import React from "react";
// import { motion } from "framer-motion";

// const tabButtonStyles = {
//   base: 'px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border-purple-500 border border-4 rounded-lg',
//   active: 'bg-purple-500 text-white border-4 rounded-lg',
//   inactive:
//     'text-white-500 hover:bg-purple-500 hover:text-white border-4 rounded-lg',
// };
const tabButtonStyles = {
  base: 'px-4 py-2 mb-2 sm:mb-0 sm:mr-2 border-4 rounded-lg',
  active:
    'bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-4 rounded-lg',
  inactive:
    'text-white-500 border-gradient border hover:bg-gradient-to-br from-primary-500 to-secondary-500 hover:text-white rounded-lg',
};

// Inside your TabButton component
const TabButton = ({ selectTab, active, children }) => {
  const styles = active
    ? `${tabButtonStyles.base} ${tabButtonStyles.active}`
    : `${tabButtonStyles.base} ${tabButtonStyles.inactive}`;

  return (
    <button className={styles} onClick={selectTab}>
      {children}
    </button>
  );
};

export default TabButton;
