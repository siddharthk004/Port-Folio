import React from "react";

function Navbar() {
  return (
    <div className="animate-[swipeInTop_1.4s_ease-out] flex justify-between text-white pl-[2.5vw] pr-[1vw] h-[8vh] w-full ">
      <div className="flex">
        <img
          className="h-[3vw] mt-3 ml-3 w-[3vw] bg-zinc-500 rounded-full m-2 border-[.1vw] border-yellow-500"
          src="https://i.pinimg.com/474x/57/ca/39/57ca3921a1fd86fda893af90d1a8d6a7.jpg"
          alt="img"
        ></img>
        <div className="font-serif text-yellow-300 text-2xl font-semibold text-center w-[15%] h-full pt-6">
          Portfolio
        </div>
      </div>
      <div className="flex font-sans text-2xl font-semibold text-center h-full p-6 gap-10">
        <button className="hover:text-yellow-400">Home</button>
        <button className="hover:text-yellow-400 ">Portfolio</button>
        <button className="hover:text-yellow-400 ">Testmonials</button>
        <button className="hover:text-yellow-400 ">Services</button>
        <button className="hover:text-yellow-400 ">Contact</button>
      </div>
      <button className="relative group overflow-hidden text-xl text-zinc-900 border-[0.2vw] border-gray-500 rounded-full m-4 bg-yellow-400 w-[8vw] h-[2.5vw]">
        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:-translate-y-full">
          Let&apos;s Connect
        </span>

        <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 text-black">
          Let&apos;s Connect
        </span>
      </button>
    </div>
  );
}

export default Navbar;
