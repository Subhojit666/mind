import React from "react";

function Activity() {
  return (
    <div className="flex flex-row items-start justify-start h-screen p-8">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-6xl font-extrabold mb-4 ml-[-15px] font-serif text-[#040404]">
          Embark on the Journey of
        </h1>

        <div className="bg-[rgba(255, 255, 255, 0.8)] dark:bg-[rgba(17, 23, 41, 0.8)] p-8 rounded-lg shadow-lg mt-20 ml-[-18px]">
          {/* Add your four buttons here */}
          <button className="bg-[#443625] text-white rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full mb-4">
            Button 1
          </button>
          <button className="bg-[#443625] text-white rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full mb-4">
            Button 2
          </button>
          <button className="bg-[#443625] text-white rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full mb-4">
            Button 3
          </button>
          <button className="bg-[#443625] text-white rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full">
            Button 4
          </button>
        </div>
      </div>

      <div className="ml-8 text-black mt-48">
        <p className="text-3xl font-medium">
          "Tough times never last, but tough people do." 
          <p>Robert H. Schuller</p> 
        </p>
      </div>
    </div>
  );
}

export default Activity;
