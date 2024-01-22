import React from "react";
import CustomButton from "../TombolKustom";
import PropTypes from "prop-types";
import { HiOutlineTrash } from "react-icons/hi";

const TombolHapus = ({ onDelete }) => {
  return (
    <>
      <CustomButton title="Close" icons={<HiOutlineTrash />} onClick={onDelete} />
    </>
  );
};

TombolHapus.propTypes = {
  onDelete: PropTypes.func.isRequired,
};

export default TombolHapus;

// by: Sarif Hidayatullah
