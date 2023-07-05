/*eslint-disable react/prop-types */
import React from "react"; //eslint-disable-line no-unused-vars
import "../../styles/atoms/Box.css";
const Box = ({ children, className = "" }) => {
  return <div className={`box ${className}`}>{children}</div>;
};

export default Box;
