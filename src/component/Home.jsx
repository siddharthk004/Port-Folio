import React from "react";
import img1 from "../assets/profile.png";
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  return (
  <div className="w-full pt-[18vh] flex flex-col lg:flex-row items-center justify-center px-4 sm:px-8 lg:px-16 py-12 gap-8">
      {/* Left Section */}
      <div className="w-full lg:w-1/2 flex flex-col items-start justify-center text-white">
        <h1 className="animate-[swipeInRight_1s_ease-out] text-xl sm:text-2xl font-semibold">
          Hello, It's Me
        </h1>
        <h1 className="animate-[swipeInLeft_1s_ease-out] text-4xl sm:text-5xl md:text-6xl text-yellow-400 font-bold font-serif py-2">
          Siddharth Kardile
        </h1>
        <h1 className="animate-[swipeInRight_1s_ease-out] text-2xl sm:text-3xl font-semibold">
          And I'm a{" "}
          <span className="text-yellow-600 font-serif">Full Stack Developer</span>
        </h1>
        <br/>
        <p className="animate-[swipeInRight_1s_ease-out] text-sm sm:text-base text-white mt-4 max-w-[90%]">
          Building High Converting Websites for Brands, Startups & Businesses that generate leads, joining & sales.
        </p>
        <br/>

        <h1 className="animate-[swipeInLeft_1s_ease-out] text-lg sm:text-xl mt-4 font-lightbold font-sans">
          | Vite-React | Spring Boot | MySql | Java | Tailwind CSS |
        </h1>

        {/* Social Icons */}
        <h1 className="mt-16 text-white text-xl sm:text-2xl text-center w-full">Find me on</h1>
        <div className="flex justify-start ml-[10vw] sm:justify-center gap-6 mt-4">
          <a href="https://www.instagram.com/kardile_siddharth/">
            <FaInstagram className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl bg-pink-600 text-white p-1" />
          </a>
          <a href="https://github.com/siddharthk004">
            <FaGithub className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-zinc-900 text-white p-1" />
          </a>
          <a href="https://leetcode.com/u/siddharthk004/">
            <SiLeetcode className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl text-yellow-400 p-1" />
          </a>
          <a href="mailto:siddharthkardile5@gmail.com">
            <BiLogoGmail className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl text-pink-700 p-1" />
          </a>
          <a href="https://www.linkedin.com/in/siddharth-kardile-3a2978267/">
            <FaLinkedin className="h-8 w-8 sm:h-10 sm:w-10 rounded-xl text-blue-600 p-1" />
          </a>
        </div>
      </div>

      {/* Right Section (Profile Image) */}
      <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
        <img
          src={img1}
          alt="Profile"
          className="w-[60vw] sm:w-[40vw] md:w-[30vw] lg:w-[24vw] rounded-full border-4 border-zinc-600 shadow-2xl shadow-yellow-900 bg-zinc-700 hover:shadow-yellow-600 hover:border-0 transition duration-300"
        />
      </div>
    </div>
  );
}

export default Home;
