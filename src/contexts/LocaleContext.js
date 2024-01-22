import { createContext } from "react";

const LocaleContext = createContext();

export const LocaleProvider = LocaleContext.Provider;
export const LocalConsumer = LocaleProvider.Consumer;
export default LocaleContext;

// by: Sarif Hidayatullah
