import React from "react";

export const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      className="btn btn-primary btn-sm m-2 "
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};
