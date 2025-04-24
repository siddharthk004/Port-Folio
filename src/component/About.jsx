import React from "react";

const About = () => {
  return (
    <footer className="bg-zinc-900 pt-20 text-white py-8">
      <div className="container mx-auto text-center">
        <h2 className="text-xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-400 mb-4">
          I'm a passionate developer skilled in building user-friendly and innovative web solutions. 
          I specialize in technologies like React, Java, Python, and more. Let's connect and create something amazing together!
        </p>
        <div className="flex justify-center gap-4">
        <a
            href="https://www.linkedin.com/in/siddharth-kardile-3a2978267/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-300"
          >
            LinkedIn
          </a><a
            href="https://leetcode.com/u/siddharthk004/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-yellow-500 hover:text-blue-300"
          >
            Leetcode
          </a>
          <a
            href="https://github.com/siddharthk004"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-200"
          >
            GitHub
          </a>
          <a
            href="mailto:siddharthkardile5@gmail.com"
            className="text-red-500 hover:text-red-300"
          >
            Email Me
          </a>
        </div>
        <p className="text-gray-600 mt-6 text-sm">
          © {new Date().getFullYear()} Pray-Tech : . All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default About;
