import React from "react";
import CustomButton from "../TombolKustom";
import { HiX } from "react-icons/hi";
import PropTypes from "prop-types";

const TombolTutup = ({ onClose }) => {
  return (
    <>
      <CustomButton title="Close" icons={<HiX />} onClick={onClose} />
    </>
  );
};

TombolTutup.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default TombolTutup;

// by: Sarif Hidayatullah
