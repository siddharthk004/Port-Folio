import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/logo1.jpg"; 
import img2 from "../assets/logo2.jpg"; 

function Education() {
  return (
    <section id="education" className="bg-zinc-900 py-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
        Education
      </h2>

      {/* PG Section */}
      <motion.div
        className="bg-zinc-800 text-white p-8 md:p-12 rounded-xl shadow-xl max-w-6xl mx-auto mb-16 border border-zinc-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-5 gap-10 items-center mb-6">
          <div className="md:col-span-1 flex justify-center">
            <img src={img1} alt="PG logo" className="w-[80px] h-[80px] rounded-full object-cover border border-yellow-400" />
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold">
              Savitribai Phule Pune University, Pune
            </h3>
            <p className="text-lg font-semibold">MSc Scientific Computing</p>
            <p className="text-md">May 2024 – May 2026 | Grade: <strong>Pursuing</strong></p>
          </div>
        </div>
        <p className="mb-4 text-lg">
          <strong>Activities:</strong> College fest, technical team collaboration, webinars, IT industry interactions.
        </p>
        <p className="mb-4 text-md leading-relaxed">
          Pursuing an MSc in Scientific Computing, Modeling, and Simulation. This program emphasizes advanced computational techniques and scientific simulations, preparing me for real-world problem-solving in tech and research fields.
        </p>
        <p className="mb-4 text-md">
          <strong>Skills:</strong> Java, Spring Boot, Bootstrap, React, Tailwind CSS, GitHub, C++, Haskell, Algorithms
        </p>
        <div className="mt-6 text-center">
          <h4 className="text-lg font-bold mb-3">PG Journey</h4>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS8ggatyx40RPzR1FdyJtpQvJlQgURgxcASw&s"
            alt="PG Group"
            className="rounded-xl mx-auto w-full max-w-md shadow-lg"
          />
        </div>
      </motion.div>

      {/* UG Section */}
      <motion.div
        className="bg-zinc-800 text-white p-8 md:p-12 rounded-xl shadow-xl max-w-6xl mx-auto border border-zinc-700"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="grid md:grid-cols-5 gap-10 items-center mb-6">
          <div className="md:col-span-1 flex justify-center">
            <img src={img2} alt="UG logo" className="w-[80px] h-[80px] rounded-full object-cover border border-yellow-400" />
          </div>
          <div className="md:col-span-4">
            <h3 className="text-2xl font-bold">
              B.P.H.E. Society's Ahmednagar College, Ahmednagar
            </h3>
            <p className="text-lg font-semibold">BSc Computer Science</p>
            <p className="text-md">May 2021 – May 2024 | Grade: <strong>9.18 CGPA</strong></p>
          </div>
        </div>
        <p className="mb-4 text-lg">
          <strong>Activities:</strong> College fest, technical collaboration, webinars, team management, and leadership.
        </p>
        <p className="mb-4 text-md leading-relaxed">
          This 3-year journey taught me core computer science concepts and helped me develop strong technical, communication, and management skills. I actively contributed to team projects and technical events that enhanced my leadership and problem-solving abilities.
        </p>
        <p className="mb-4 text-md">
          <strong>Skills:</strong> Java, JDBC, CSS, Python, SQL, C++, Core Java, Advanced Java, DSA, OOP
        </p>
        <div className="mt-6 text-center">
          <h4 className="text-lg font-bold mb-3">UG Journey</h4>
          <img
            src="https://media.collegedekho.com/media/img/institute/crawled_images/None/bphe1.jpg"
            alt="UG Group"
            className="rounded-xl mx-auto w-full max-w-md shadow-lg"
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Education;
