import React from "react";
import img from "../assets/agrivision.png"; // Importing the image
import img2 from "../assets/allinone.png"; // Importing the image

function Project1() {
  return (
    <div className=" bg-zinc-800 mt-32 w-full">
      <div className="w-full pb-8 pt-24 text-5xl text-white border-b-[.1vw] border-zinc-900 font-bold text-center">
        || Projects ||
      </div>

      <div className="w-full pt-10 flex pl-10">
        <div className="w-[49%] pt-10">
          <img src={img} className=""/>
        </div>
        <div className="w-[50%] mt-10 text-white mx-auto">
          <h1 className="text-6xl font-bold text-center mb-8">AgriVision</h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            Welcome to AgriVision, a cutting-edge platform designed to empower
            farmers with innovative tools to protect and enhance their crops.
            AgriVision is more than just a tool—it's a mission to revolutionize
            agriculture by combining technology and sustainability. By equipping
            farmers with actionable insights, we aim to reduce crop loss,
            optimize resource usage, and pave the way for a prosperous farming
            community.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-5 py-3 text-sm font-semibold text-white bg-zinc-600 rounded-xl">
              JavaScript ES6 | 
              React v18.0 |
              Tailwind CSS v3.0 |
              Spring Boot 3.4.1 |
              HTML 5
            </span>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/siddharthk004/Html-Domination_Projects/tree/main/React/AgriVision" className="px-8 py-3 bg-gradient-to-r from-teal-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <br />

      <div className="w-full pt-10 flex pl-10 pb-10">
        <div className="w-[50%] mt-10 text-white mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">
            All In One Shop
          </h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <span className="px-5 py-3 text-sm font-semibold text-white bg-zinc-600 rounded-xl">
              JavaScript ES6 | 
              React v18.0 |
              Tailwind CSS v3.0 |
              HTML 5
            </span>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/siddharthk004/Html-Domination_Projects/tree/main/React/All_In_One_Shop" className="px-8 py-3 bg-gradient-to-r from-teal-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </a>
          </div>
        </div>
        <div className="w-[50%] pr-10 pt-20 pb-6">
          <img src={img2} className="" />
        </div>
      </div>
    </div>
  );
}

export default Project1;
