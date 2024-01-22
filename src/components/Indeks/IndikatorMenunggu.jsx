import React from "react";
import useLanguage from "../../hooks/Bahasa";

const IndikatorMenunggu = () => {
  const textLangApp = useLanguage("mainApp");

  return <div className="loading-indicator">{textLangApp.message.loading}</div>;
};

export default IndikatorMenunggu;

// by: Sarif Hidayatullah
