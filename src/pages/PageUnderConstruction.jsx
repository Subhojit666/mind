import React from "react";

function PageUnderConstruction() {
  return (
    <div className="py-20 h-screen md:h-fit flex flex-col gap-20 items-center">
      <h1 className="text-4xl md:text-6xl capitalize font-bold dark:text-white">
        coming soon...
      </h1>
      <p className="text-2xl w-[320px] md:w-[470px] dark:text-white text-center font-medium">
        We are working on something exciting. This information will be released
        very soon!
      </p>
      <img src="./muy-pronto.png" alt="coming soon image" className="w-40" />
    </div>
  );
}

export default PageUnderConstruction;
