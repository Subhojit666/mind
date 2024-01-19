import React from "react";
import { Link } from "react-router-dom";

function Distract() {
  return (
    <div className="flex flex-col items-center justify-center h-screen p-8">
      <div className="bg-[rgba(255, 255, 255, 0.8)] dark:bg-[rgba(17, 23, 41, 0.8)] p-8 rounded-lg shadow-lg">
        {/* Add your five options here */}
        <Link to="/timer">
        <button className="bg-[#d08b2a] text-white rounded-lg py-4 px-8 hover:bg-[#d0722a]/80 transition duration-200 w-full mb-4">
        Think of an animal for every letter of the alphabet.
        </button>
        </Link>
        <Link to="/timer">
        <button className="bg-[#d08b2a] text-white rounded-lg py-4 px-8 hover:bg-[#d0722a]/80 transition duration-200 w-full mb-4">
        Can you name atleast Fifteen of your favourite TV series?
        </button>
        </Link>
        <Link to="/timer">
        <button className="bg-[#d08b2a] text-white rounded-lg py-4 px-8 hover:bg-[#d0722a]/80 transition duration-200 w-full mb-4">
        Which superheroes would you like to have as your friends and why?
        </button>
        </Link>
        <Link to="/timer">
        <button className="bg-[#d08b2a] text-white rounded-lg py-4 px-8 hover:bg-[#d0722a]/80 transition duration-200 w-full mb-4">
        Count everything green that you see.
        </button>
        </Link>
        <Link to="/timer">
        <button className="bg-[#d08b2a] text-white rounded-lg py-4 px-8 hover:bg-[#d0722a]/80 transition duration-200 w-full">
        Roll a dice. Think of that many number of things that have made you feel good.
        </button>
        </Link>
      </div>
    </div>
  );
}

export default Distract;
