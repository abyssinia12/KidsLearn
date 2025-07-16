import React from "react";

const Button = ({ children, onClick, type = "button", className = "" }) => {
  const baseStyles =
    "px-6 py-3 rounded-lg font-semibold transition duration-300 ease-in-out";
  const primaryStyles = "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyles = "bg-gray-200 text-gray-800 hover:bg-gray-300";

  let buttonStyles = primaryStyles;
  if (className.includes("secondary")) {
    buttonStyles = secondaryStyles;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${buttonStyles} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
