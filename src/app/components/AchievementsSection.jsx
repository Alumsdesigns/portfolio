// You can adjust the animation speed and make it smoother by changing the step size and interval duration.
//I've replaced animatedValues[index].toFixed(1) with Math.floor(animatedValues[index]) for Users and Years to remove the decimal places.
'use client';
import React, { useEffect, useState } from 'react';

const achievementsList = [
  {
    metric: 'Projects',
    value: 10,
    postfix: '+',
  },
  {
    prefix: '~',
    metric: 'Users',
    value: 10000000,
  },
  {
    metric: 'Years',
    value: 2.5,
  },
];

const AchievementsSection = () => {
  const [animatedValues, setAnimatedValues] = useState(
    achievementsList.map(() => 0)
  );

  useEffect(() => {
    // Animate values from 0 to the target values
    const animationIntervals = achievementsList.map((achievement, index) => {
      const targetValue =
        achievement.metric === 'Projects'
          ? achievement.value
          : Math.ceil(achievement.value);
      const step = targetValue / 50; // Adjust the step size as needed for the animation speed

      return setInterval(() => {
        setAnimatedValues((prevValues) => {
          const updatedValues = [...prevValues];
          if (updatedValues[index] + step >= targetValue) {
            updatedValues[index] = targetValue;
          } else {
            updatedValues[index] += step;
          }
          return updatedValues;
        });
      }, 20); // Adjust the interval duration as needed for the animation speed
    });

    return () => {
      // Clear animation intervals on unmount
      animationIntervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {achievement.prefix}
                {typeof animatedValues[index] === 'number'
                  ? achievement.metric === 'Projects'
                    ? Math.ceil(animatedValues[index])
                    : Math.floor(animatedValues[index]) // Round down for Users and Years
                  : ''}{' '}
                {/* Show an empty string if animation hasn't started yet */}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
