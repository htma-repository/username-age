import React from "react";

const Button = (props) => {
  const { children, typeButton, onClick, customClass } = props;
  return (
    <button
      className={`rounded-md bg-violet-700 py-1 px-4 shadow-md hover:bg-violet-900 ${customClass}`}
      type={typeButton || "button"}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
