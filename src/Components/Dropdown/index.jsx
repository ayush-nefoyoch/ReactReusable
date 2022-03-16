import React from "react";
// import "../index.css";

const DropDown = (props) => {
  return (
    <div className="btn-group dropdown">
      <select defaultValue="" className="page-link" onChange={props.dropDown}>
        <option value="" disabled>
          More
        </option>
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
    </div>
  );
};

export default DropDown;
