import React from "react";
import { motion } from "framer-motion";

function Discription() {
  return (
    <div className="bg-zinc-800 mt-40">
      <h1 className="text-center text-white font-semibold text-4xl">
        || About Myself ||
      </h1>

      <motion.p
        className="ml-[10%] m-10 text-white text-xl bg-zinc-700 p-10 rounded-xl mr-[10%] text-justify"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        I am a motivated and detail-oriented Computer Science graduate with a
        strong foundation in web development, Java programming, and database
        management. My academic background from BPHE Society Ahmednagar College
        has equipped me with a robust understanding of various programming
        languages and technologies, including Python, Java, C/C++, HTML, CSS,
        and SQL.
        <br />
        Throughout my internships, I have successfully completed multiple
        projects that highlight my technical skills and problem-solving
        abilities. As a Web Developer Intern at Bharat Intern, I focused on
        front-end technologies like HTML, CSS, and JavaScript, managing project
        code using Git/GitHub, and ensuring responsive and user-friendly
        designs. My role as a Java Developer Intern at Oasis Info byte involved
        optimizing code performance, integrating libraries, and tackling coding
        challenges. Currently, I am enhancing my expertise in Python as a
        Developer Intern at Intern Career, where I am working on projects
        involving API integrations and automated systems.
        <br />
        Some of my notable projects include developing a Customized Virtual File
        System using C programming, creating an automated mail sender in Python,
        and designing a personal portfolio website with modern web technologies.
        These experiences have honed my skills in debugging, version control,
        and cross-browser compatibility.
        <br />
        I am passionate about continuous learning and staying updated with the
        latest technologies. My participation in workshops, such as the AWS
        Summit, reflects my commitment to expanding my knowledge and applying it
        to real-world scenarios.
        <br />
        I am eager to leverage my skills and experience in a software
        development role, contributing to innovative projects and collaborating
        with talented teams. Feel free to connect with me to discuss potential
        opportunities or share insights on the ever-evolving field of
        technology.
      </motion.p>
    </div>
  );
}

export default Discription;

      
    
  
            