import React from "react";
import { GrSun } from "react-icons/gr";
import { IoMdMoon } from "react-icons/io";
import useTheme from "../../hooks/Tema";

const GantiTema = () => {
  const [theme, onThemeChangeHandler] = useTheme();
  return (
    <button onClick={() => onThemeChangeHandler(theme === "dark" ? "light" : "dark")} type="button">
      {theme === "dark" ? <IoMdMoon /> : <GrSun />}
    </button>
  );
};

export default GantiTema;

// by: Sarif Hidayatullah
