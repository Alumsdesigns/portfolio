import React, { useMemo } from 'react';

const Moodboard = () => {
  const images = useMemo(
    () => [
      '/images/steakfine.jpg',
      '/images/redWine8.jpeg',
      '/images/GlutenFree7.webp',
      '/images/coffees4.webp',
      '/images/chefblackfemale5.jpeg',
      '/images/Cinnamonsticks6.webp',
      '/images/wines1.jpeg',
      '/images/creamWhip2.webp',
      '/images/RusticRedVelvet3.webp',
    ],
    []
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <div
          key={image}
          className="relative cursor-pointer overflow-hidden border-4 border-wine aspect-w-1 aspect-h-1 md:aspect-w-1 md:aspect-h-1/2 lg:aspect-w-1 lg:aspect-h-1/3"
        >
          <img
            src={image}
            alt={`Photo ${index + 1}`}
            className="w-full h-full object-cover transition-transform transform scale-100 hover:scale-110"
          />
        </div>
      ))}
    </div>
  );
};

export default Moodboard;
