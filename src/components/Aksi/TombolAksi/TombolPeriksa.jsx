import React from "react";
import CustomButton from "../TombolKustom";
import { HiCheck } from "react-icons/hi";
import PropTypes from "prop-types";

const TombolPeriksa = ({ onCheck }) => {
  return (
    <>
      <CustomButton title="Tambahkan" icons={<HiCheck />} onClick={onCheck} />
    </>
  );
};

TombolPeriksa.propTypes = {
  onCheck: PropTypes.func.isRequired,
};

export default TombolPeriksa;

// by: Sarif Hidayatullah
