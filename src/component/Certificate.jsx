import React from "react";
import { motion } from "framer-motion";
import img1 from "../assets/img/Bharat-Intern certificate.jpg";
import img3 from "../assets/img/certificate AWS.png";
import img4 from "../assets/img/certificate GOOGLE.png";
import img5 from "../assets/img/certificate MIME.png";
import img6 from "../assets/img/certificate.png";
import img7 from "../assets/img/python data science.jpg";

const images = [img1, img3, img4, img5, img6, img7];

function Certificate() {
  return (
    <section id="certification" className="bg-zinc-900 py-20 mt-20 px-6">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-12">
        Certificates
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={i}
            className="rounded-xl overflow-hidden shadow-lg border border-zinc-700 hover:shadow-yellow-400 transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
          >
            <img
              src={img}
              alt={`Certificate ${i + 1}`}
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Certificate;
