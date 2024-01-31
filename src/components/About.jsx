import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-[4rem]">
          I'm a Full Stack Developer with a degree in computer science. I'm good
          at using Java, React, and Tailwind CSS. Check out my portfolio to see
          the cool stuff I've built. Let's chat and see what awesome things we
          can create together!
        </p>

        <br />

        <p className="text-xl">
          I graduated in computer science and can handle Java, React, and
          Tailwind CSS like a pro. Look at my portfolio to see what I've worked
          on. Let's talk and figure out some cool projects to tackle!
        </p>
      </div>
    </div>
  );
};

export default About;
