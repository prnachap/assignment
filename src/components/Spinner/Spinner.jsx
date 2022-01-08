import React from "react";
import loader from "../../assets/spinner.gif";

const Spinner = () => {
  return (
    <div className="spinner">
      <img src={loader} alt="spinner" />
    </div>
  );
};

export default Spinner;
