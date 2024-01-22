import React from "react";
import PropTypes from "prop-types";
import { BiArchiveIn, BiArchiveOut } from "react-icons/bi";
import CustomButton from "../TombolKustom";

const TombolArsip = ({ archive, onArchive }) => {
  return (
    <>
      <CustomButton title={archive ? "Aktifkan" : "Arsipkan"} icons={archive ? <BiArchiveOut /> : <BiArchiveIn />} onClick={onArchive} />
    </>
  );
};

TombolArsip.propTypes = {
  archive: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default TombolArsip;

// by: Sarif Hidayatullah
