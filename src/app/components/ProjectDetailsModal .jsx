// ProjectDetailsModal.js
'use client';
import React from 'react';

const ProjectDetailsModal = ({ project, onClose }) => {
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
      <div className="bg-white p-4 rounded-lg">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        {/* Add any other project details you want to display */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default ProjectDetailsModal;
