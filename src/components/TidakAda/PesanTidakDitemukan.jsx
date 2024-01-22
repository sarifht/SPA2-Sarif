import React from "react";
import useLanguage from "../../hooks/Bahasa";

const PesanTidakDitemukan = () => {
  const textMainApp = useLanguage("mainApp");

  return (
    <>
      <h2>404</h2>
      <p>{textMainApp.notFoundPage}</p>
    </>
  );
};

export default PesanTidakDitemukan;

// by: Sarif Hidayatullah
