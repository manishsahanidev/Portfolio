/* eslint-disable react/no-unescaped-entities */

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
          I'm Manish, a graduate in Computer Science. I enjoy building things with technology. I've learned Java, JavaScript, React, Tailwind CSS, and some other tools for creating websites and apps.
        </p>

        <br />

        <p className="text-xl">
          During my studies, I worked on projects that taught me how to solve problems using these skills. I'm excited to keep learning and growing in the world of software development.
        </p>
      </div>
    </div>
  );
};

export default About;
