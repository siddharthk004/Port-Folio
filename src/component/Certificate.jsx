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
    <div className="bg-zinc-800 mt-40 pb-20">
      <h1 className="text-4xl text-center text-white font-semibold">Certificate</h1>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        {images.map((img, i) => (
          <motion.img
            key={i}
            src={img}
            className="h-[20vw] w-[35vw] rounded-lg shadow-lg"
            initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.0, ease: "easeOut" }}
          />
        ))}
      </div>
    </div>
  );
}

export default Certificate;
