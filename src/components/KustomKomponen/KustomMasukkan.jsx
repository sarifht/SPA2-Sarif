import React from "react";
import PropTypes from "prop-types";

const CustomInput = ({ type, name, value, minLength, maxLenght, onChange, isRequired = false }) => {
  return <input className="input-custom" type={type} id={name} name={name} value={value} minLength={minLength || "10"} maxLength={maxLenght || "255"} onChange={onChange} required={isRequired} />;
};

CustomInput.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  minLength: PropTypes.string,
  maxLenght: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  isRequired: PropTypes.bool,
};

export default CustomInput;

// by: Sarif Hidayatullah
