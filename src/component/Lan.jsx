import React from "react";
import { motion } from "framer-motion";

const categories = [
  {
    title: "Programming Languages",
    skills: ["C", "C++", "Java", "Python"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS", "Spring Boot"],
  },
  {
    title: "Tools & Databases",
    skills: ["GitHub", "MySQL"],
  },
];

function Lan() {
  return (
    <section className="bg-zinc-900 py-20 px-6 mt-20">
      <h2 className="text-center text-white font-semibold text-4xl mb-16">
        -- My Tech Stack --
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10">
        {categories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: catIdx * 0.2 }}
            className="bg-zinc-800 border border-zinc-700 rounded-xl p-6 shadow-xl"
          >
            <h3 className="text-xl text-white font-semibold mb-6 border-b pb-2 border-yellow-500">
              {category.title}
            </h3>
            <ul className="space-y-4">
              {category.skills.map((skill, index) => (
                <li key={index}>
                  <div className="text-white font-medium mb-1">{skill}</div>
                  <div className="w-full bg-zinc-700 rounded-full h-3">
                    <motion.div
                      className="h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Lan;
