import React from "react";
import CustomButton from "../TombolKustom";
import PropTypes from "prop-types";
import { AiOutlineEdit } from "react-icons/ai";

const TombolEdit = ({ onEdit }) => {
  return (
    <>
      <CustomButton title="Edit" icons={<AiOutlineEdit />} onClick={onEdit} />
    </>
  );
};

TombolEdit.propTypes = {
  onEdit: PropTypes.func.isRequired,
};

export default TombolEdit;

// by: Sarif Hidayatullah
