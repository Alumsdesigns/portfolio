// import React from 'react';

// const VideoComponent = () => {
//   return (
//     <div className="bg-black grid md:grid-cols-2 overflow-scroll">
//       {/* Left Column */}
//       <div className="md:col-span-1 h-screen flex flex-col justify-center text-white p-8 space-y-4">
//         <div className="text-center">
//           <h3 className="text-2xl md:text-3xl font-bold mb-4">
//             Play the Demo Video of Prototype MVP Showcasing
//           </h3>
//           <p className="text-base md:text-lg mb-2">Click & Collect UI Flow</p>
//           <p className="text-base md:text-lg">
//             Reservations / Bookings & Other User Interfaces
//           </p>
//         </div>
//       </div>

//       {/* Right Column */}
//       <div className="md:col-span-1 h-screen flex items-center justify-center">
//         <div className="max-w-full max-h-full overflow-hidden">
//           <video controls className="w-full h-full object-contain">
//             <source src="/asportfolio.mp4" type="video/mp4" />
//             Your browser does not support the video mp4.
//           </video>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VideoComponent;

// VideoComponent.js
import React from 'react';

const VideoComponent = () => {
  return (
    <div className="bg-black md:h-auto grid md:grid-cols-2">
      {/* Left Column */}
      <div className="md:col-span-1 h-full md:h-auto flex flex-col justify-center text-white p-8 space-y-4">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Play the Demo Video of the Prototype MVP Showcasing
          </h3>
          <p className="text-base md:text-lg mb-2">Click & Collect UI Flow</p>
          <p className="text-base md:text-lg">
            Reservations / Bookings & Other User Interfaces
          </p>
        </div>
      </div>

      {/* Right Column */}
      <div className="md:col-span-1 h-full md:h-auto flex items-center justify-center p-4 md:p-0">
        <div className="max-w-full max-h-full overflow-hidden">
          <video controls className="w-full h-full object-contain">
            <source src="/asportfolio.mp4" type="video/mp4" />
            Your browser does not support the video mp4.
          </video>
        </div>
      </div>
    </div>
  );
};

export default VideoComponent;
