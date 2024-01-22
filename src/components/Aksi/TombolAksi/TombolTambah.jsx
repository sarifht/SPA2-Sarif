import React from "react";
import CustomButton from "../TombolKustom";
import { HiPlus } from "react-icons/hi";
import PropTypes from "prop-types";

const TombolTambah = ({ onAdd }) => {
  return (
    <>
      <CustomButton title="Tambah" icons={<HiPlus />} onClick={onAdd} />
    </>
  );
};

TombolTambah.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default TombolTambah;

// by: Sarif Hidayatullah
