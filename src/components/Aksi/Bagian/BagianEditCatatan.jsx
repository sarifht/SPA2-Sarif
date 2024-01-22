import React from "react";
import CustomActionSection from "../CustomActionSection";
import PropTypes from "prop-types";
import CheckButton from "./../buttonaction/CheckButton";

const BagianEditCatatan = ({ onSaveNote }) => {
  return (
    <CustomActionSection pagesection="detail-page">
      <CheckButton onCheck={onSaveNote} />
    </CustomActionSection>
  );
};

BagianEditCatatan.propTypes = {
  onSaveNote: PropTypes.func.isRequired,
};

export default BagianEditCatatan;

// by: Sarif Hidayatullah
