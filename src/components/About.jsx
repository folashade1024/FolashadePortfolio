import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am currently pursuing my bachelor degree in computer science with a concentration in software
          engineering. I also had 6 months of experience in web development that mostly focus on front
          end. I have worked on various platforms
          including HTML, CSS, JavaScript and React as well.
        </p>

        <br />

        <p className="text-xl">
          I have been able to developed some project and I am also willing to learn more.
        </p>
      </div>
    </div>
  );
};

export default About;
