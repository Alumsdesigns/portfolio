// // import React from 'react';

// // const VideoContentCreationMLD = () => {
// //   return (
// //     <div className="bg-black md:h-auto grid md:grid-cols-2">
// //       {/* Left Column */}
// //       <div className="md:col-span-1 h-full md:h-auto flex flex-col justify-center text-white p-8 space-y-4">
// //         <div className="text-center">
// //           <h3 className="text-2xl md:text-3xl font-bold mb-4">
// //             Play Video to View Some Content Creation Iterations
// //           </h3>
// //         </div>
// //       </div>

// //       {/* Right Column */}
// //       <div className="md:col-span-1 h-full md:h-auto flex items-center justify-center p-4 md:p-0">
// //         <div className="max-w-full max-h-full overflow-hidden">
// //           <video controls className="w-full h-full object-contain">
// //             <source src="/contentmyLocalDressmaker.mp4" type="video/mp4" />
// //             Your browser does not support the video mp4.
// //           </video>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default VideoContentCreationMLD;
// import React from 'react';

// const VideoContentCreationMLD = () => {
//   return (
//     <div className="bg-black md:h-auto grid md:grid-cols-1">
//       {/* Text Section */}
//       <div className="h-full md:h-auto flex flex-col justify-center text-white p-8 space-y-4">
//         <div className="text-center">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Play Video to View Some Content Creation Iterations
//           </h3>
//         </div>
//       </div>

//       {/* Video Section */}
//       <div className="h-full md:h-auto flex items-center justify-center p-4 md:p-0">
//         <div className="max-w-full max-h-full overflow-hidden">
//           <video controls className="w-full h-full object-contain">
//             <source src="/contentmyLocalDressmaker.mp4" type="video/mp4" />
//             Your browser does not support the video mp4.
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoContentCreationMLD;
import React from 'react';

const VideoContentCreationMLD = () => {
  return (
    <div className="bg-black md:h-auto grid md:grid-cols-1">
      {/* Text Section */}
      <div className="h-full md:h-auto flex flex-col justify-center text-white p-8 space-y-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Play Video to View Some Content Creation Iterations
          </h3>
        </div>
      </div>

      {/* Video Section */}
      <div className="h-full md:h-auto flex items-center justify-center p-4 md:p-0">
        <div className="max-w-full max-h-full overflow-hidden">
          <video controls className="w-full h-full object-contain">
            <source src="/contentmyLocalDressmaker.mp4" type="video/mp4" />
            Your browser does not support the video mp4.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoContentCreationMLD;
