import React from "react";
import CustomActionSection from "../BagianKustomAksi";
import ArchieveButton from "../TombolAksi/TombolArsip";
import DeleteButton from "../TombolAksi/TombolHapus";
import PropTypes from "prop-types";

const BagianDetailCatatan = ({ archived, onArchive, onDelete }) => {
  return (
    <CustomActionSection pagesection="detail-page">
      <>
        <ArchieveButton archive={archived} onArchive={onArchive} />
        <DeleteButton onDelete={onDelete} />
      </>
    </CustomActionSection>
  );
};

BagianDetailCatatan.propTypes = {
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BagianDetailCatatan;

// by: Sarif Hidayatullah
