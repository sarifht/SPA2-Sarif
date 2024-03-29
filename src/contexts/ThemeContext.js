import { createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ThemeContext.Provider;
export const ThemeConsumer = ThemeContext.Consumer;
export default ThemeContext;

// by: Sarif Hidayatullah
