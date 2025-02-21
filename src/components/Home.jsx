import React from "react";
import HeroImage from "../assets/WhatsApp Image copy 2025-02-21 at 15.11.40_28af7bda.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a MERN Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
          As a passionate MERN stack developer, I aim to apply my skills in MongoDB, Express.js, React, and Node.js to build dynamic web applications. Eager to learn and grow, I am committed to contributing to impactful projects while expanding my technical abilities.
          </p>

          <div>
            <Link
              to="about"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              About Me
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div className="sm:w-[300px] h-[400px] md:w-[500px] md:h-[400px]">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto object-cover w-full md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
