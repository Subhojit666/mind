import { useEffect, useState } from "react";
import { FaMoon } from "react-icons/fa";
import { BsSunFill } from "react-icons/bs";

function Toggle() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.querySelector("html").classList.add("dark"); // Agregar la clase "dark" si el tema es oscuro
    } else {
      document.querySelector("html").classList.remove("dark"); // Eliminar la clase "dark" si el tema es claro
    }
  }, [theme]);

  const changeDarkMode = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light")); // Cambiar entre los modos
  };

  return (
    <button
      className="flex items-center justify-center w-14 h-7 p-1 rounded-full transition-colors bg-[#223344] duration-200 shadow-md"
      onClick={changeDarkMode}
    >
      {theme === "dark" ? (
        <div className="flex gap-2 items-center">
          <FaMoon className="text-black bg-white rounded-full p-1" size={20} />
          <BsSunFill className="text-white" size={14} />
        </div>
      ) : (
        <div className="flex gap-2 items-center">
          <FaMoon className="text-white" size={14} />
          <BsSunFill
            className="text-black bg-white rounded-full p-1"
            size={20}
          />
        </div>
      )}
    </button>
  );
}

export default Toggle;
