import React from "react";
import img1 from "../assets/travel.png"; // Importing the image
import img2 from "../assets/temp.png"; // Importing the image
import img3 from "../assets/DFR.jpg"; // Importing the image
import img4 from "../assets/email.jpg"; // Importing the image

function Project3() {
  return (
    <div className=" bg-zinc-800 w-full p-10 flex gap-20 pl-28">
      <div className="bg-zinc-900 outline outline-zinc-700 shadow-2xl shadow-zinc-700 h-[40vh] rounded-3xl w-[20%]">
        <img className="w-[100%] h-[40%] p-4" src={img1} alt="Agrivision" />
        <h1 className="text-white text-green-400 font-bold text-2xl font-bold text-center">
          Travel Application
        </h1>
        <p className="text-white text-x pl-6 pr-8 text-justify font-semibold text-center mb-6">
          A travel website is an online platform designed to inspire and assist
          users in planning their journeys. It showcases stunning destinations,
          offers booking options.
        </p>
        <a
          href="https://github.com/siddharthk004/Projects/tree/master/Travel%20web"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[35%] bg-white text-blue-600 hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Visit Github
        </a>
      </div>
      <div className="bg-zinc-900 outline outline-zinc-700 shadow-2xl shadow-zinc-700 h-[40vh] rounded-3xl w-[20%]">
        <img className="w-[100%] h-[40%] p-4" src={img2} alt="Agrivision" />
        <h1 className="text-white text-green-400 font-bold text-2xl font-bold text-center">
          Temperature Conversion
        </h1>
        <p className="text-white text-x pl-6 pr-8 text-justify font-semibold text-center mb-6">
          A temperature conversion website is a simple and interactive platform
          that allows users to convert temperatures between different scales.clean
          and user-friendly design with input fields,
        </p>
        <a
          href="https://github.com/siddharthk004/Projects/tree/master/Temperature"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[35%] bg-white text-blue-600 hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Visit Github
        </a>
      </div>
      <div className="bg-zinc-900 outline outline-zinc-700 shadow-2xl shadow-zinc-700 h-[40vh] rounded-3xl w-[20%]">
        <img className="w-[100%] h-[40%] p-4" src={img3} alt="Agrivision" />
        <h1 className="text-white text-green-400 font-bold text-2xl font-bold text-center">
          Duplicate File Removal
        </h1>
        <p className="text-white text-x pl-6 pr-8 text-justify font-semibold text-center mb-6">
          A duplicate file removal program. a directory to save storage space. It uses
          hashing algorithms (like MD5 or SHA-256) to compare file contents
          rather than relying on filenames.
        </p>
        <a
          href="https://github.com/siddharthk004/Projects/blob/master/DuplicateFileRemoval.py"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[35%] bg-white text-blue-600 hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Visit Github
        </a>
      </div>
      <div className="bg-zinc-900 outline outline-zinc-700 shadow-2xl shadow-zinc-700 h-[40vh] rounded-3xl w-[20%]">
        <img className="w-[100%] h-[40%] p-4" src={img4} alt="Agrivision" />
        <h1 className="text-white text-green-400 font-bold text-2xl font-bold text-center">
          Email Automation
        </h1>
        <p className="text-white text-x pl-6 pr-8 text-justify font-semibold text-center mb-8">
          An email automation streamlines sending emails
          programmatically. Using libraries like smtplib for sending email for form, and messages.
        </p>
        <a
          href="https://github.com/siddharthk004/Projects/blob/master/SPMS.py"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-[35%] bg-white text-blue-600 hover:bg-blue-700 hover:text-white text-sm font-bold py-2 px-4 rounded-full"
        >
          Visit Github
        </a>
      </div>
    </div>
  );
}

export default Project3;
