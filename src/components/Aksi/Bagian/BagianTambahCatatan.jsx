import React from "react";
import CustomActionSection from "../BagianKustomAksi";
import { useNavigate } from "react-router-dom";
import CloseButton from "../TombolAksi/TombolTutup";
import CheckButton from "../TombolAksi/TombolPeriksa";
import PropTypes from "prop-types";

const BagianTambahCatatan = ({ onSaveNote }) => {
  const navigate = useNavigate();

  return (
    <CustomActionSection pagesection="add-new-page">
      <>
        <CloseButton onClose={() => navigate("/")} />
        <CheckButton onCheck={onSaveNote} />
      </>
    </CustomActionSection>
  );
};

BagianTambahCatatan.propTypes = {
  onSaveNote: PropTypes.func.isRequired,
};

export default BagianTambahCatatan;

// by: Sarif Hidayatullah
