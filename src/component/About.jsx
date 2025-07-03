import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const About = () => {
  return (
    <footer className="bg-zinc-900 pt-20 pb-10 text-white">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-2xl font-semibold mb-4 tracking-wide">About Me</h2>
        <p className="text-gray-400 leading-relaxed mb-6">
          I'm a passionate full-stack developer dedicated to crafting clean,
          user-focused applications. I specialize in Java, Spring Boot, React,
          Python, and modern web technologies. Always learning, always building.
        </p>

        <div className="flex justify-center gap-6 text-xl mb-6">
          <a
            href="https://www.linkedin.com/in/siddharth-kardile-3a2978267/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://leetcode.com/u/siddharthk004/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-yellow-400 transition"
            title="LeetCode"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://github.com/siddharthk004"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition"
            title="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="mailto:siddharthkardile5@gmail.com"
            className="hover:text-red-400 transition"
            title="Email"
          >
            <FaEnvelope />
          </a>
        </div>

        <p className="text-sm text-zinc-500">
          &copy; {new Date().getFullYear()} <span className="text-yellow-400 font-medium">Pray-Tech</span>. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default About;
