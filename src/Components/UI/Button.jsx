import React from 'react';

const Button = ({ children, typeButton, onClick }) => {
  return (
    <button
      className="bg-violet-700 rounded-md py-1 px-4 shadow-md mx-auto hover:bg-violet-900"
      type={typeButton || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
