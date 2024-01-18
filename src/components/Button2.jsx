import React from "react";
import { Link } from "react-router-dom";

function Button2() {
  return (
    <Link to="/activity">
      <button className="uppercase bg-[#d08b2a] rounded-md hover:bg-[#d0722a]/80 
      transition duration-200 text-2xl dark:text-white font-semibold  py-4 px-8  w-full mb-4">
        Activities
      </button>
    </Link>
  );
}

export default Button2;
