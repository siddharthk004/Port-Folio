import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed animate-[swipeInTop_1.4s_ease-out] flex justify-between items-center text-white px-[4vw] py-3 h-[8vh] w-full bg-black">
      {/* Logo & Title */}
      <div className="flex items-center">
        <img
          className="h-[8vw] w-[8vw] sm:h-[4vw] sm:w-[4vw] md:h-[3vw] md:w-[3vw] bg-zinc-500 rounded-full border-[0.3vw] border-yellow-500"
          src="https://i.pinimg.com/474x/57/ca/39/57ca3921a1fd86fda893af90d1a8d6a7.jpg"
          alt="img"
        />
        <div className="font-serif text-yellow-300 text-lg sm:text-xl md:text-2xl font-semibold ml-2">
          Portfolio
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-6 text-[1.2vw] font-semibold">
        <button className="hover:text-yellow-400">Home</button>
        <button className="hover:text-yellow-400">Portfolio</button>
        <button className="hover:text-yellow-400">Testimonials</button>
        <button className="hover:text-yellow-400">Services</button>
        <button className="hover:text-yellow-400">Contact</button>
      </div>

      {/* Connect Button (Responsive) */}
      <div className="hidden md:block">
        <button className="relative group overflow-hidden text-[1vw] text-zinc-900 border-[0.15vw] border-gray-500 rounded-full bg-yellow-400 w-[8vw] h-[2.5vw]">
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform group-hover:-translate-y-full">
            Let&apos;s Connect
          </span>
          <span className="absolute inset-0 flex items-center justify-center transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
            Let&apos;s Connect
          </span>
        </button>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden z-50">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-yellow-300 text-3xl">
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[8vh] left-0 w-full bg-black flex flex-col items-center gap-6 text-lg py-6 z-40">
          <button className="hover:text-yellow-400">Home</button>
          <button className="hover:text-yellow-400">Portfolio</button>
          <button className="hover:text-yellow-400">Testimonials</button>
          <button className="hover:text-yellow-400">Services</button>
          <button className="hover:text-yellow-400">Contact</button>
          <button className="bg-yellow-400 text-zinc-900 px-4 py-2 rounded-full font-semibold">
            Let&apos;s Connect
          </button>
        </div>
      )}
    </div>
  );
}

export default Navbar;
