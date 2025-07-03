import React from "react";
import Project1 from "../Project/Project1";

import img1 from "../assets/agrivision.png";
import img2 from "../assets/allinone.png";
import img5 from "../assets/netflix.png";

const ProjectLine = () => {
  const data = [
    {
      id: 1,
      title: "AgriVision",
      description: `Welcome to AgriVision, a cutting-edge platform designed to empower farmers...`,
      technologies:
        "JavaScript ES6 | React v18.0 | Tailwind CSS v3.0 | Spring Boot 3.4.1 | HTML 5",
      githubLink:
        "https://github.com/siddharthk004/Html-Domination_Projects/tree/main/React/AgriVision",
      image: img1,
    },
    {
      id: 2,
      title: "All-in-One Shop",
      description: `Welcome to All-in-One Shop, your ultimate destination for the latest electronic gadgets...`,
      technologies:
        "JavaScript ES6 | React v18.0 | Tailwind CSS v3.0 | HTML 5",
      githubLink:
        "https://github.com/siddharthk004/Html-Domination_Projects/tree/main/React/All_In_One_Shop",
      image: img2,
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: `A Netflix clone using HTML, CSS, and JavaScript that replicates the UI and UX of Netflix...`,
      technologies: "JavaScript ES6 | Tailwind CSS v3.0 | HTML 5",
      githubLink:
        "https://github.com/siddharthk004/Projects/tree/master/Netflix%20clone",
      image: img5,
    },
  ];

  return (
    <div className="pt-[10vh] px-4 sm:px-8 lg:px-16">
      <h1 className="mb-12 text-4xl text-yellow-300 font-bold text-center">
        || Projects ||
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        {data.map((item, index) => (
          <Project1 key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default ProjectLine;
