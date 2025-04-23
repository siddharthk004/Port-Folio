import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between text-white pl-[2.5vw] pr-[1vw] h-[8vh] w-full ">
      <div className = "flex">
      <img className="h-[3vw] mt-3 ml-3 w-[3vw] bg-zinc-500 rounded-full m-2 border-[.1vw] border-yellow-500" src="https://i.pinimg.com/474x/57/ca/39/57ca3921a1fd86fda893af90d1a8d6a7.jpg" alt="img"></img>
      <div className="font-serif text-yellow-300 text-2xl font-semibold text-center w-[15%] h-full pt-6">
        Portfolio
      </div>
      </div>
      <div className="flex font-sans text-2xl font-semibold text-center h-full p-6 gap-10">
      <button className="hover:text-yellow-400">
        Home
      </button>
      <button className="hover:text-yellow-400 ">
      Portfolio
      </button>
      <button className="hover:text-yellow-400 ">
      Testmonials
      </button>
      <button className="hover:text-yellow-400 ">
      Services
      </button>
      <button className="hover:text-yellow-400 ">
      Contact
      </button>
      </div>
      <button  className="hover:bg-gray-700 hover:text-white text-xl text-zinc-900 text-center p-1.6  border-[.2vw] border-gray-500 rounded-full m-4 bg-yellow-400 h-[2vw] w-[8vw]">
        <p>Let`s Connect</p>
        </button>
    </div>
  );
}

export default Navbar;
