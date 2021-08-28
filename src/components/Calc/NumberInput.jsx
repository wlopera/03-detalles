import React from "react";
import PropTypes from "prop-types";

const NumberInput = ({ text, name, value, handleChange }) => {
  return (
    <label className="mx-2">
      {text} :
      <input onChange={handleChange} type="number" name={name} value={value} />
    </label>
  );
};

NumberInput.propTypes = {
  text: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.number,
  handleChange: PropTypes.func,
};

export default NumberInput;
