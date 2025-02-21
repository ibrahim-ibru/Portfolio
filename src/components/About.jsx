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

        <p className="text-xl mt-10">
        I am an enthusiastic and highly motivated MERN stack developer with a strong foundation in MongoDB, Express.js, React, and Node.js. Recently graduated, I have developed a passion for creating dynamic, user-friendly web applications and am eager to apply my knowledge in real-world projects. I enjoy problem-solving and thrive in collaborative environments where I can learn from others and contribute my ideas.
        </p>

        <br />

        <p className="text-xl">
        Through my personal projects and coursework, I've honed my skills in both front-end and back-end development. I am always looking for opportunities to learn new technologies and stay updated with industry trends. My goal is to build innovative and efficient solutions that enhance user experience and drive business success.
        </p>
        <br/>
        <p className="text-xl">
        As I start my career, I am eager to collaborate with experienced professionals, grow my skills, and contribute to impactful projects in a fast-paced, growth-oriented environment.
        </p>
      </div>
    </div>
  );
};

export default About;
