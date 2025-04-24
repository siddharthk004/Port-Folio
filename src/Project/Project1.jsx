import React from "react";
import { motion } from "framer-motion";

function Project1({ key, data }) {
  return (
    <motion.div
      className="bg-zinc-800 flex flex-wrap"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Timeline Circle Section */}
      <div className="w-1/3">
        <div className="w-[.1vw] ml-[17vw] h-1/3 bg-zinc-600"></div>
        <div className="w-[4vw] ml-[15vw] h-[4vw] rounded-full border-2 border-dashed border-zinc-600 text-zinc-400 text-center text-2xl pt-[1vw]">
          {data.id}
        </div>
        <div className="w-[.1vw] ml-[17vw] h-2/3 bg-zinc-600"></div>
      </div>

      {/* Content Section */}
      <div className="w-2/3">
        <h1 className="text-3xl font-bold ml-[24vw] mb-8 m-10 text-white">
          {data.title}
        </h1>
        <div>
          <div className="w-[65%] ml-40">
            <img src={data.image} className="rounded-md shadow-lg" />
          </div>
          <p className="m-10 text-xl ml-[8vw] w-2/3 text-white text-justify leading-relaxed">
            {data.description}
          </p>
          <div className="flex flex-wrap ml-40 gap-4 mb-6">
            <span className="px-5 py-3 text-sm font-semibold text-white bg-zinc-600 rounded-xl">
              {data.technologies}
            </span>
          </div>
          <div className="flex ml-40 mb-10">
            <a
              href={data.githubLink}
              className="px-8 py-3 bg-gradient-to-r from-teal-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Project1;
