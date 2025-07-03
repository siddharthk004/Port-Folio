import React from "react";
import { FaCode, FaMobileAlt, FaServer, FaCloud } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Frontend Development",
      description: "Building responsive, interactive, and modern UIs using React, HTML, CSS, and Tailwind CSS."
    },
    {
      icon: <FaServer />,
      title: "Backend Development",
      description: "Creating RESTful APIs and robust server-side apps using Java, Spring Boot, and MySQL."
    },
    {
      icon: <FaMobileAlt />,
      title: "Responsive Design",
      description: "Ensuring mobile-first, cross-platform compatible websites that look great on any device."
    },
    {
      icon: <FaCloud />,
      title: "Deployment & Cloud Integration",
      description: "Deploying full-stack apps on platforms like Railway, Vercel, and integrating cloud services."
    }
  ];

  return (
    <section id="services" className="bg-zinc-800 py-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-white mb-12">My Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl p-6 text-center hover:shadow-md transition"
            >
              <div className="text-yellow-400 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
