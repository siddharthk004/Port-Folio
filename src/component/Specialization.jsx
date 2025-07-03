import React from "react";
import { FaCode, FaDatabase, FaServer, FaLaptopCode, FaCloud } from "react-icons/fa";

const specializations = [
  {
    title: "Frontend Development",
    icon: <FaLaptopCode className="text-yellow-400 text-4xl mb-3" />,
    description: "Building responsive, fast, and modern interfaces using React, Tailwind CSS, and JavaScript."
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-yellow-400 text-4xl mb-3" />,
    description: "Creating scalable REST APIs with Java, Spring Boot, MySQL, and API security."
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-yellow-400 text-4xl mb-3" />,
    description: "Designing and managing databases using MySQL, PostgreSQL, and optimizing query performance."
  },
  {
    title: "Cloud & Deployment",
    icon: <FaCloud className="text-yellow-400 text-4xl mb-3" />,
    description: "Deploying and managing apps using Railway, Vercel, DigitalOcean, and GitHub Actions."
  },
  {
    title: "Full Stack Projects",
    icon: <FaCode className="text-yellow-400 text-4xl mb-3" />,
    description: "End-to-end development: integrating frontend + backend with performance and security in mind."
  }
];

const Specializations = () => {
  return (
    <section id="specializations" className="bg-zinc-800 py-20 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-10">My Specializations</h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {specializations.map((spec, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-lg shadow-md hover:shadow-yellow-500/20 transition-all"
            >
              {spec.icon}
              <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
              <p className="text-gray-400 text-sm">{spec.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Specializations;
