import React from "react";

function Activity() {
  return (
    <div className="flex flex-row items-start justify-start h-screen p-8">
      <div className="flex flex-col items-start justify-start">
        <h1 className="text-6xl font-extrabold mb-4 ml-[-10px] font-serif  dark:text-white">
          Embark on the Journey of :
        </h1>

        <div className="bg-[rgba(255, 255, 255, 0.8)] dark:bg-[rgba(17, 23, 41, 0.8)] p-8 rounded-lg shadow-lg mt-20 ml-[-18px]">
          {/* Add your four buttons here */}
          <button className="bg-[#443625] text-2xl dark:text-white font-semibold rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full mb-4">
          Comfort
          </button>
          <button className="bg-[#443625] text-2xl  dark:text-white font-semibold rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full mb-4">
          Distract
          </button>
          <button className="bg-[#443625] text-2xl  dark:text-white font-semibold rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full mb-4">
          Express Yourself
          </button>
          <button className="bg-[#443625] text-2xl  dark:text-white font-semibold rounded-lg py-4 px-8 hover:bg-[#34291b]/80 transition duration-200 w-full">
          Breathing Exercise
          </button>
        </div>
      </div>

      <div className="ml-8 dark:text-white mt-48">
  <p className="text-3xl font-semibold font-cursive">
    "Tough times never last, but tough people do." 
    <p>Robert H. Schuller</p> 
  </p>
</div>

    </div>
  );
}

export default Activity;
