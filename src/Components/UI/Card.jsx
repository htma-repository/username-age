import React from 'react';

const Card = ({ children, className }) => {
  return (
    <section
      className={`flex flex-col gap-4 p-4 mx-4 my-8 rounded-md shadow-md max-w-screen-sm bg-slate-50 sm:mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
