import React from "react";
import { motion } from "framer-motion";

const skills = [
  { name: "C", level: 80 },
  { name: "C++", level: 90 },
  { name: "Java", level: 85 },
  { name: "Python", level: 90 },
  { name: "Spring Boot", level: 80 },
  { name: "MySQL", level: 85 },
  { name: "React", level: 80 },
  { name: "HTML", level: 95 },
  { name: "CSS", level: 90 },
  { name: "GitHub", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "Tailwind CSS", level: 85 },
];

function Lan() {
  return (
    <div className="bg-zinc-800 mt-40 py-10">
      <h1 className="text-center text-white font-semibold text-4xl mb-10">
        -- My Tech Stack --
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <div className="flex justify-between mb-1">
              <span className="text-lg font-semibold">{skill.name}</span>
              <span className="text-lg font-semibold">{skill.level}%</span>
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4">
              <motion.div
                className="bg-green-500 h-4 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Lan;
