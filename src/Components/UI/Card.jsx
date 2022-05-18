import React from "react";

const Card = (props) => {
  const { children, className } = props;
  return (
    <section
      className={`mx-4 my-8 flex max-w-screen-sm flex-col gap-4 rounded-md bg-slate-50 p-4 shadow-md sm:mx-auto ${className}`}
    >
      {children}
    </section>
  );
};

export default Card;
