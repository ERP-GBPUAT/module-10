import React from "react";

const Column = ({label, value}) => {
  return (
    <div className="col-10 col-md-8 col-lg-6">
      <div className="d-flex fs-5">
        <label className="font-weight-bold" style={{width:"200px"}} htmlFor={label}>
          {label}
        </label>
        <div style={{width:"30px"}}>:</div>
        <div id={label} className="mx-5">
          {value}
        </div>
      </div>
    </div>
  );
};

export default Column;
