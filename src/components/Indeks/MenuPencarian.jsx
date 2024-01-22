import React from "react";
import PropTypes from "prop-types";
import useLanguage from "../../hooks/Bahasa";

const MenuPencarian = ({ value, onChange }) => {
  const textLangSearch = useLanguage("active");

  return (
    <section className="search-bar">
      <input type="text" placeholder={textLangSearch.searchPlaceholder} value={value} onChange={onChange} />
    </section>
  );
};

MenuPencarian.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default MenuPencarian;

// by: Sarif Hidayatullah
