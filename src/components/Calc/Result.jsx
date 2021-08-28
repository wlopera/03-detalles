import React from "react";
import PropTypes from "prop-types";

const Result = ({ operation, calculation }) => {
  return (
    <>
      <br /> <br />
      <span>
        {operation}: {calculation}
      </span>
    </>
  );
};

Result.propTypes = {
  operation: PropTypes.string,
  calculation: PropTypes.number,
};

export default Result;
