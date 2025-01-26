import React from "react";
import img from "../assets/cliser.jpg"; // Importing the image
import img2 from "../assets/cvfs.png"; // Importing the image
import img3 from "../assets/netflix.png"; // Importing the image

function Project2() {
  return (
    <div className=" bg-zinc-800 w-full">
      <div className="w-full flex pl-10">
        <div className="w-[55%] pt-10">
          <img src={img} className="h-[80%] w-[90%] pt-20 pl-10" />
        </div>
        <div className="w-[50%] mr-10 mt-24 text-white mx-auto">
          <h1 className="text-6xl font-bold text-center mb-12 mt-10">
            Chat Application
          </h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            A Java client-server chat application is a program where multiple
            clients communicate with a server over a network to exchange
            messages. The server acts as the central hub, managing connections
            and relaying messages between clients. This application typically
            uses sockets for communication. The server listens for incoming
            client connections on a specific port, while clients connect to the
            server using its IP address and port.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">
              Java V21.0.2
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">
              Swing
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-cyan-700 rounded-full">
              AWT
            </span>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/siddharthk004/Projects/blob/master/server.java" className="px-8 py-3 bg-gradient-to-r from-zinc-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </a>
          </div>
        </div>
      </div>

      <br />

      <div className="w-full  flex pl-10">
        <div className="w-[50%] mt-2 text-white mx-auto">
          <h1 className="text-5xl font-bold text-center mb-8">CVFS</h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            A Customised Virtual File System (CVFS) in C or C++ is a
            programmatic abstraction that simulates a file system's structure
            and functionality within a controlled environment. It allows users
            to create, read, write, delete, and manage files and directories in
            a virtual space without using the underlying operating system's file
            system directly. The CVFS typically implements features like inode
            management, block allocation, and a directory hierarchy.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">
              C v17.0
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">
              C++ v17.0
            </span>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/siddharthk004/Projects/blob/master/CVFS.Cpp" className="px-8 py-3 bg-gradient-to-r from-zinc-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </a>
          </div>
        </div>
        <div className="w-[50%] pl-10 pr-10 pt-6">
          <img src={img2} className=" h-[80%] w-[90%]" />
        </div>
      </div>

      <div className="w-full flex pl-10">
        <div className="w-[55%] pt-10">
          <img src={img3} className="h-[80%] w-[90%] pt-20 pl-10" />
        </div>
        <div className="w-[50%] mr-10 mt-24 text-white mx-auto">
          <h1 className="text-6xl font-bold text-center mb-12 mt-10">
            Netflix Clone
          </h1>
          <p className="m-10 text-xl text-justify leading-relaxed">
            A Netflix clone using HTML, CSS, and JavaScript is a front-end web
            application that replicates the look and feel of Netflix's user
            interface. It includes a responsive layout with sections like a
            navigation bar, a hero banner, and categorized rows of movies or
            shows displayed as carousels. HTML structures the content, CSS
            styles the UI with animations and transitions, and JavaScript adds
            interactivity,
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <span className="px-4 py-2 text-sm font-semibold text-white bg-blue-500 rounded-full">
              Html 5
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-yellow-500 rounded-full">
              CSS
            </span>
            <span className="px-4 py-2 text-sm font-semibold text-white bg-cyan-700 rounded-full">
              Javascript
            </span>
          </div>

          <div className="flex justify-center">
            <a href="https://github.com/siddharthk004/Projects/tree/master/Netflix%20clone" className="px-8 py-3 bg-gradient-to-r from-zinc-600 via-blue-700 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
              GitHub
            </a>
          </div>
        </div>
      </div>
      <div class="container mx-auto py-10">
    <h1 class="text-3xl font-bold mb-6 text-center text-white">Languages I Know</h1>
    <div class="flex flex-wrap justify-center gap-4">
      <span class="px-4 py-2 rounded-full text-white bg-blue-500 shadow-md">C</span>
      <span class="px-4 py-2 rounded-full text-white bg-green-500 shadow-md">C++</span>
      <span class="px-4 py-2 rounded-full text-white bg-yellow-500 shadow-md">Java</span>
      <span class="px-4 py-2 rounded-full text-white bg-purple-500 shadow-md">Python</span>
      <span class="px-4 py-2 rounded-full text-white bg-pink-500 shadow-md">HTML</span>
      <span class="px-4 py-2 rounded-full text-white bg-red-500 shadow-md">CSS</span>
      <span class="px-4 py-2 rounded-full text-white bg-yellow-900 shadow-md">React</span>
      <span class="px-4 py-2 rounded-full text-white bg-zinc-500 shadow-md">Tailwind</span>
      <span class="px-4 py-2 rounded-full text-white bg-orange-700 shadow-md">Spring boot</span>
      <span class="px-4 py-2 rounded-full text-white bg-cyan-800 shadow-md">Bootstrap</span>
      <span class="px-4 py-2 rounded-full text-white bg-teal-500 shadow-md">JavaScript</span>
    </div>
  </div>
    </div>
  );
}

export default Project2;
