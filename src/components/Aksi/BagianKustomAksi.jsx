import React from "react";
import PropTypes from "prop-types";

const CustomActionSection = ({ pagesection, children }) => {
  return <div className={`${pagesection}__action`}>{children}</div>;
};

CustomActionSection.propTypes = {
  pagesection: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};

export default CustomActionSection;

// by: Sarif Hidayatullah
