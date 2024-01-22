import React, { useEffect, useMemo, useState } from "react";
import SetupRoutes from "./routes";
import { Link } from "react-router-dom";
import Navbar from "./components/Indeks/Navbar";
import useTheme from "./hooks/Tema";
import { getUserLogged } from "./utils/network-data";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LocaleProvider } from "./contexts/LocaleContext";
import { AuthProvider } from "./contexts/AuthContext";
import LoadingIndicator from "./components/Indeks/IndikatorMenunggu";

function App() {
  const [auth, setAuth] = useState(null);
  const [locale, setLocale] = useState("id");
  const [theme, setTheme] = useTheme();
  const [loading, setLoading] = useState(true);

  const onToggleLocale = () => {
    localStorage.setItem("locale", locale === "id" ? "en" : "id");
    setLocale((prev) => (prev === "id" ? "en" : "id"));
  };

  const localeValueContext = useMemo(
    () => ({
      locale,
      onToggleLocale,
    }),
    [locale]
  );

  const authValueContext = useMemo(
    () => ({
      auth,
      setAuth,
    }),
    [auth]
  );

  const themeValueContext = useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  useEffect(() => {
    getUserLogged()
      .then((res) => {
        if (!res.error) {
          setAuth(res.data);
        } else {
          setAuth(null);
        }
        setLoading(false);
      })
      .catch(() => {
        alert("Error");
      });

    if (localStorage.locale && ["id", "en"].includes(localStorage.locale)) {
      setLocale(localStorage.locale);
    }

    if (localStorage.theme) {
      setTheme(localStorage.theme);
    } else {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    }
  }, []);

  return (
    <ThemeProvider value={themeValueContext}>
      <LocaleProvider value={localeValueContext}>
        <AuthProvider value={authValueContext}>
          <div className="app-container">
            <h1 style={{ display: "flex", justifyContent: "center", paddingTop: "32px" }}>
              <Link to="/">Catatanku by Sarif Hidayatullah</Link>
            </h1>
            <div style={{ display: "flex", justifyContent: "center", paddingTop: "32px" }}>
              <Navbar />
            </div>

            <main>{loading ? <LoadingIndicator /> : <SetupRoutes />}</main>
          </div>
        </AuthProvider>
      </LocaleProvider>
    </ThemeProvider>
  );
}

export default App;
