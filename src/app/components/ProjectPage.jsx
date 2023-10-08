// src/components/projects/ProjectPage.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// const ProjectPage = ({ project }) => {
//   return (
//     <div className="bg-[#121212] min-h-screen text-white">
//       <div className="container mx-auto p-8">
//         <h1 className="text-3xl font-bold mb-4">yep</h1>
//         <div className="mb-8">
//           <img
//             src="/images/Oct1xAlumStFinalP1.jpg"
//             alt="Project Image"
//             className="w-full"
//           />
//         </div>
//         <p>aaaaaa</p>
//
//         <Link href="/projects">
//           <p className="text-blue-500 cursor-pointer mt-8">Back to Projects</p>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default ProjectPage;

const ProjectPage = ({ project }) => {
  return (
    <div className="bg-[#121212] min-h-screen text-white">
      <div className="container">
        <div>
          <Image
            src="/images/FinialOctADAS.jpg"
            alt="Project Image"
            width={1920} // Set the image width
            height={1080} // Set the image height
            priority={true}
          />
        </div>
      </div>
    </div>
  );
};

export default ProjectPage;
