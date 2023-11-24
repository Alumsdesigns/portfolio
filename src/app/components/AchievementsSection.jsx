// You can adjust the animation speed and make it smoother by changing the step size and interval duration.
//I've replaced animatedValues[index].toFixed(1) with Math.floor(animatedValues[index]) for Users and Years to remove the decimal places.
// This code defines a React component called `AchievementsSection`.
//  This component displays a list of achievements with animated values.

// Here's an explanation of the code:

// 1. The `achievementsList` array contains objects representing achievements. Each object has three properties:
//    - `metric`: The type of achievement (e.g., Projects, Users, Years).
//    - `value`: The target value for that achievement (e.g., the number of projects or years).
//    - `postfix`: A string to be displayed after the animated value (e.g., '+').

// 2. Inside the component, there's a `useState` hook used to manage the `animatedValues` state. This state is initialized as an array of
//  zeros with the same length as the `achievementsList`.

// 3. The `useEffect` hook is used to trigger animations when the component mounts. It sets up intervals for each achievement to animate the values.

// 4. Inside the `useEffect`, a loop iterates through the `achievementsList`. For each achievement, it calculates the `targetValue` and `step` for
// animation. The `targetValue` is taken directly from the achievement's `value`, except for "Users" and "Years," where it's rounded up using `Math.ceil`.

// 5. A `setInterval` is used to animate the values. It updates the `animatedValues` state by incrementing each value by `step` until it reaches
//  the `targetValue`. The interval duration is set to 20 milliseconds for smooth animation.

// 6. The `useEffect` also returns a cleanup function that clears all the animation intervals when the component unmounts to prevent memory leaks.

// 7. The component renders a container with achievements using the `map` function. For each achievement, it displays the animated value along with
// the prefix, postfix, and metric.

// 8. The `animatedValues` array is used to display the animated numbers. If the animation hasn't started yet (initially all values are 0),
//  an empty string is displayed.

// 9. The CSS classes are applied to style the achievements' container, fonts, and alignment.

// In summary, this React component uses state and the `useEffect` hook to animate and display a list of achievements with smooth number transitions.
// It calculates the target values and step sizes based on the type of achievement and updates the UI accordingly.
'use client';
import React, { useEffect, useState } from 'react';

// Define a list of achievements with their metrics, values, and postfixes
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
    value: 2,
  },
];

// Create the AchievementsSection component
const AchievementsSection = () => {
  // Initialize the state for animated values, initially set to all zeros
  //   This line of code is initializing the animatedValues state using the useState hook. Let's break it down:
  // const [animatedValues, setAnimatedValues]: This code is using array destructuring to declare a state variable called animatedValues and a function called setAnimatedValues to update that state variable. The animatedValues will be an array that holds the animated values for each achievement.
  // useState(achievementsList.map(() => 0)): Here, the useState hook is being used to set up the initial state of animatedValues. The map function is used to create an array of the same length as achievementsList. For each element in this new array, the value is initialized to 0. So, animatedValues starts as an array of zeros, one for each achievement.
  // In summary, this line of code initializes the animatedValues state as an array of zeros, where each zero represents an achievement and its current animated value. Later in the component, these values will be updated through animations as the component mounts and starts rendering.
  const [animatedValues, setAnimatedValues] = useState(
    achievementsList.map(() => 0)
  );

  // Use the useEffect hook to trigger animations when the component mounts
  useEffect(() => {
    // Animate values from 0 to the target values
    const animationIntervals = achievementsList.map((achievement, index) => {
      // Calculate the target value for the achievement
      const targetValue =
        achievement.metric === 'Projects'
          ? achievement.value
          : Math.ceil(achievement.value); // Round up for Users and Years
      // Calculate the step size for animation
      const step = targetValue / 50; // Adjust the step size as needed for the animation speed

      // Set up an interval for the animation
      return setInterval(() => {
        setAnimatedValues((prevValues) => {
          // Create a copy of the previous animatedValues
          const updatedValues = [...prevValues];
          // Check if the value has reached or exceeded the targetValue
          if (updatedValues[index] + step >= targetValue) {
            updatedValues[index] = targetValue; // Set to the targetValue
          } else {
            updatedValues[index] += step; // Increment by the step size
          }
          return updatedValues; // Return the updated animatedValues
        });
      }, 30); // Adjust the interval duration as needed for the animation speed
    });

    // Return a cleanup function to clear animation intervals on unmount
    return () => {
      animationIntervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  // Render the component's UI
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-0 px-16 flex flex-col sm:flex-row items-center justify-between">
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
                    ? Math.ceil(animatedValues[index]) // Round up for Projects
                    : Math.floor(animatedValues[index]) // Round down for Users and Years
                  : ''}{' '}
                {/* Show an empty string if animation hasn't started yet */}
                {achievement.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base" id="about-title">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
