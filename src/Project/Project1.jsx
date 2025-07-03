import React from "react";
import { motion } from "framer-motion";

function Project1({ data }) {
  return (
    <motion.div
      className="bg-zinc-900 rounded-xl shadow-lg overflow-hidden p-6 flex flex-col justify-between transition-transform hover:scale-105 duration-300"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h1 className="text-2xl font-bold text-yellow-400 mb-4">{data.title}</h1>
      <img
        src={data.image}
        alt={data.title}
        className="rounded-md mb-4 shadow-md h-[200px] w-full object-cover"
      />
      <p className="text-sm text-white mb-4 text-justify leading-relaxed">
        {data.description.length > 300
          ? data.description.slice(0, 300) + "..."
          : data.description}
      </p>
      <p className="text-xs text-gray-300 mb-4">{data.technologies}</p>
      <a
        href={data.githubLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-4 py-2 rounded-md text-center"
      >
        View on GitHub
      </a>
    </motion.div>
  );
}

export default Project1;
