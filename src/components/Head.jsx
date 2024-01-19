import { useState } from "react";
import Toggle from "./Toggle";
import { FaBars, FaTimesCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

function Head() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("aboutus");

  const closeMenu = () => {
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-transparent px-3 sm:px-5 md:px-40 ">
      <nav className="flex justify-between items-center">
        <Link to="/">
          <div className="flex gap-2 items-center">
            <img
              src="./alarado-icon-homepage.png"
              alt="icon homepage"
              className="w-10"
            />
            <span className="text-black dark:text-white text-xl font-bold">
              MIND
            </span>
          </div>
        </Link>

        <div className="sm:hidden lg:hidden relative z-50">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimesCircle size={25} onClick={closeMenu} />
            ) : (
              <FaBars size={25} className="dark:text-white" />
            )}
          </button>
        </div>

        <div
          className={`${
            isOpen
              ? "fixed inset-0 left-auto bg-white z-50 w-[240px]"
              : "hidden"
          } sm:flex`}
        >
          <ul className="flex flex-col sm:flex-row lg:flex-row gap-10 sm:gap-5 text-xl md:text-base font-semibold items-center place-content-center h-96 sm:h-0 md:h-0 text-[#66748A]">
            <Link to="/" onClick={() => setSelectedOption("aboutus")}>
              <li
                className={
                  selectedOption === "aboutus"
                    ? " text-black dark:md:text-white"
                    : ""
                }
              >
                Home
              </li>
            </Link>

            <Link
              to="/journal"
              onClick={() => setSelectedOption("product")}
            >
              <li
                className={
                  selectedOption === "product"
                    ? " text-black dark:md:text-white"
                    : ""
                }
              >
                Personal
              </li>
            </Link>

            <Link
              to="/about"
              onClick={() => setSelectedOption("resource")}
            >
              <li
                className={
                  selectedOption === "resource"
                    ? " text-black dark:md:text-white"
                    : ""
                }
                style={{ marginRight: "20px" }}
              >
                About Us
              </li>
            </Link>

            <div className="block md:hidden">
              <Toggle />
            </div>
          </ul>

          {/* Close button inside the mobile menu */}
          <div className="absolute top-4 right-2 sm:hidden">
            <FaTimesCircle size={25} onClick={closeMenu} />
          </div>
        </div>

        <div className="hidden md:block">
          <Toggle />
        </div>
      </nav>
    </header>
  );
}

export default Head;
