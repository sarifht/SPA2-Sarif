import React from "react";
import PropTypes from "prop-types";

const TombolKustom = ({ title, icons, onClick }) => {
  return (
    <div className="action">
      <button className="action" type="button" title={title} onClick={onClick}>
        {icons}
      </button>
    </div>
  );
};

export default TombolKustom;

TombolKustom.propTypes = {
  title: PropTypes.string.isRequired,
  icons: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
};

// by: Sarif Hidayatullah
