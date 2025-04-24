import React from "react";
import Project1 from "../Project/Project1";

import img1 from "../assets/agrivision.png"; // Importing the image
import img2 from "../assets/allinone.png"; // Importing the image
import img5 from "../assets/netflix.png"; // Importing the image

const ProjectLine = () => {
  const data = [
    {
      id: 1,
      title: "AgriVision",
      description: `Welcome to AgriVision, a cutting-edge platform designed to empower
          farmers with innovative tools to protect and enhance their crops.
          AgriVision is more than just a tool—it's a mission to revolutionize
          agriculture by combining technology and sustainability. By equipping
          farmers with actionable insights, we aim to reduce crop loss,
          optimize resource usage, and pave the way for a prosperous farming
          community.`,
      technologies:
        "JavaScript ES6 | React v18.0 | Tailwind CSS v3.0 | Spring Boot 3.4.1 | HTML 5",
      githubLink:
        "https://github.com/siddharthk004/Html-Domination_Projects/tree/main/React/AgriVision",
      image: img1, // assuming `img` is defined elsewhere
    },
    {
      id: 2,
      title: "All-in-One Shop",
      description: `Welcome to All-in-One Shop, your ultimate destination for the latest
          and greatest in electronic gadgets! We are dedicated to bringing you
          cutting-edge technology and innovative devices that simplify your
          life and enhance your everyday experiences. At All-in-One Shop, we
          pride ourselves on offering a wide range of high-quality products,
          including:.
          1 - Smartphones: From flagship models to budget-friendly options.
          2 - Wearable Tech: Smartwatches and fitness trackers to keep you
          connected and healthy.
          3 - Audio Devices: Headphones and sound systems that redefine your
          listening experience.
          4 - Home Appliances: Smart gadgets to make your home more
          efficient and connected.`,
      technologies:
        "JavaScript ES6 | React v18.0 | Tailwind CSS v3.0 | HTML 5",
      githubLink:
        "https://github.com/siddharthk004/Html-Domination_Projects/tree/main/React/All_In_One_Shop",
      image: img2,
    },
    {
      id: 3,
      title: "Netflix Clone",
      description: `A Netflix clone using HTML, CSS, and JavaScript is a front-end web
          application that replicates the look and feel of Netflix's user
          interface. It includes a responsive layout with sections like a
          navigation bar, a hero banner, and categorized rows of movies or
          shows displayed as carousels. HTML structures the content, CSS
          styles the UI with animations and transitions, and JavaScript adds
          interactivity,`,
      technologies: "JavaScript ES6 | Tailwind CSS v3.0 | HTML 5",
      githubLink:
        "https://github.com/siddharthk004/Projects/tree/master/Netflix%20clone",
      image: img5,
    },
  ];

  return (
    <div className="pt-[10vw] ">
      <h1 className="mb-20 text-5xl text-white text-center">|| Project ||</h1>
      {data.map((item, index) => (
        <Project1 key={index} data={item} />
      ))}
    </div>
  );
};

export default ProjectLine;
