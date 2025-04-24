import React from "react";
import img1 from "../assets/profile.png"; // Importing the image
// import img from "../assets/img.png"; // Importing the image
import { BiLogoGmail } from "react-icons/bi";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Home() {
  return (
    <div className=" w-full items-center h-full pl-10 flex justify-center">
      <div className=" w-[50%] pl-8 relative pt-[14vw]">
        {/* Placeholder content */}
        <h1 className="animate-[swipeInRight_1.0s_ease-out] text-2xl text-white font-semibold font-regular">
          Hello It`s Me
        </h1>
        <h1 className="animate-[swipeInLeft_1.0s_ease-out] text-6xl text-yellow-400 p-4 font-bold font-serif">
          Siddharth Kardile
        </h1>
        <h1 className="animate-[swipeInRight_1.0s_ease-out] text-3xl text-white font-semibold font-regular">
          And I'm a{" "}
          <span className="text-yellow-600 font-serif">
            Full Stack Developer
          </span>
        </h1>
        <h1 className="animate-[swipeInRight_1.0s_ease-out] text-white text-[1vw]">
          Building High Converting Websites For Brands, Startups & Businesss
          That Generate Leads, Joining & Sells.
        </h1>

        <h1 className="animate-[swipeInLeft_1.0s_ease-out] text-3xl text-white pt-2 font-lightbold font-sans mt-2">
          | Vite-React | Spring Boot | MySql | Java | Tailwind CSS |
        </h1>
        <h1 className="mt-20 text-white text-2xl text-center">Find me on</h1>
        <div className="text-center ">
          <h1 className="flex text-center mt-[1vw] ml-[13vw] gap-8">
            <a href="https://www.instagram.com/kardile_siddharth/">
              <FaInstagram className="animate-[swipeInBottom_1.4s_ease-out] h-[2.5vw] w-[2.5vw] rounded-xl bg-pink-600 text-white" />
            </a>
            <a href="https://github.com/siddharthk004">
              <FaGithub className="animate-[swipeInTop_1.4s_ease-out] h-[2.5vw] w-[2.5vw] rounded-full bg-zinc-900 text-white" />
            </a>
            <a href="https://leetcode.com/u/siddharthk004/">
              <SiLeetcode className="animate-[swipeInBottom_1.4s_ease-out] h-[2.5vw] w-[2.5vw] rounded-xl text-yellow-400" />
            </a>
            <a href="mailto:siddharthkardile5@gmail.com">
              <BiLogoGmail className="animate-[swipeInTop_1.4s_ease-out] h-[2.5vw] w-[2.5vw] rounded-xl text-pink-700  " />
            </a>
            <a href="https://www.linkedin.com/in/siddharth-kardile-3a2978267/">
              <FaLinkedin className="animate-[swipeInBottom_1.4s_ease-out] h-[2.5vw] w-[2.5vw] rounded-xl text-blue-600" />
            </a>
          </h1>
        </div>
      </div>
      <div className="animate-[swipeInBottom_1.4s_ease-out] w-[50%] h-[80%] pl-60 pt-20 relative">
        {/* Displaying the imported image */}
        <img
          src={img1}
          alt="Description"
          className="w-[26vw] h-[26vw] shadow-2xl shadow-yellow-900 bg-zinc-700 border-4 border-zinc-600 hover:shadow-2xl hover:shadow-yellow-600 hover:border-0 rounded-full "
        />
      </div>
    </div>
  );
}

export default Home;
