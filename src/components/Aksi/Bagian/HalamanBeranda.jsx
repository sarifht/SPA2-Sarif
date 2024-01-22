import React from "react";
import CustomActionSection from "../BagianKustomAksi";
import AddButton from "../TombolAksi/TombolTambah";
import { useNavigate } from "react-router-dom";

const HalamanBeranda = () => {
  const navigate = useNavigate();

  const onAddHandler = () => {
    navigate("/notes/new");
  };

  return (
    <CustomActionSection pagesection="homepage">
      <AddButton onAdd={onAddHandler} />
    </CustomActionSection>
  );
};

export default HalamanBeranda;

// by: Sarif Hidayatullah
