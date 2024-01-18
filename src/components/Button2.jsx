import React from "react";
import { Link } from "react-router-dom";

function Button2() {
  return (
    <Link to="/activity">
      <button className="uppercase bg-[#d08b2a] text-white rounded-lg shadow py-3 px-6 hover:bg-[#d0722a]/80 transition duration-200">
        Activities
      </button>
    </Link>
  );
}

export default Button2;
