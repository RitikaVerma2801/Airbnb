import React from "react";
import "./Button.css";

const Button = ({ id, type, onClick, disabled, label, className, style }) => {
  return (
    <>
      <button
        id={id}
        type={type}
        onClick={onClick}
        disabled={disabled}
        className={`button ${className}`}
        style={style}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
