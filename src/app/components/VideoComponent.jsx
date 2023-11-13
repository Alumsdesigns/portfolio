import React from 'react';

// const VideoComponent = () => {
//   return (
//     <div className="bg-black h-screen flex items-center justify-center">
//       <div className="max-w-screen-md">
//         <video
//           autoPlay
//           controls
//           className="w-auto h-auto max-w-full max-h-full"
//           // width="640" // Set the desired width
//           // height="640"
//         >
//           <source src="/asportfolio.mp4" type="video/mp4" />{' '}
//           {/* Set the source path */}
//           Your browser does not support the video mp4.
//         </video>
//       </div>
//     </div>
//   );
// };

const VideoComponent = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center">
      <div className="w-screen h-screen flex items-center justify-center">
        <video controls className="max-w-full max-h-full object-contain">
          <source src="/asportfolio.mp4" type="video/mp4" />
          Your browser does not support the video mp4.
        </video>
      </div>
    </div>
  );
};

export default VideoComponent;
