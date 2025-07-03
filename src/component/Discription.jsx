import { motion } from "framer-motion";
import React from "react";

function Description() {
  return (
    <section className="bg-zinc-900 py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
          About Myself
        </h2>

        <motion.div
          className="bg-zinc-800 text-white text-lg md:text-xl p-8 md:p-12 rounded-xl leading-relaxed text-justify shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="mb-6">
            I am a motivated and detail-oriented Computer Science graduate with a strong foundation in web development, Java programming, and database management. My academic background from BPHE Society’s Ahmednagar College has equipped me with solid proficiency in technologies including Python, Java, C/C++, HTML, CSS, and SQL.
          </p>

          <p className="mb-6">
            Throughout my internships, I have successfully completed multiple projects that highlight both my technical skills and problem-solving capabilities. At <strong>Bharat Intern</strong>, I focused on front-end development using HTML, CSS, and JavaScript, maintaining clean code with Git/GitHub. As a <strong>Java Developer Intern</strong> at Oasis InfoByte, I optimized performance and handled library integrations. Currently, I’m further deepening my skills in Python during my internship at <strong>Intern Career</strong>, working on APIs and automation.
          </p>

          <p className="mb-6">
            Some of my notable projects include a customized Virtual File System in C, an automated email sender in Python, and a personal portfolio site showcasing modern design principles. These experiences have refined my abilities in debugging, version control, and ensuring cross-browser compatibility.
          </p>

          <p className="mb-6">
            I’m passionate about continuous learning and regularly attend workshops such as the AWS Summit to stay updated with evolving technologies. I believe in applying new knowledge to real-world challenges through practical, hands-on experience.
          </p>

          <p>
            I am eager to contribute to innovative projects as a software developer and collaborate with like-minded professionals. Feel free to connect if you’re interested in working together or simply sharing ideas in tech!
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Description;
