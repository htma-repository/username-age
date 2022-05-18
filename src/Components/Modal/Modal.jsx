import React from "react";
import ReactDOM from "react-dom";

import Card from "../UI/Card";
import Button from "../UI/Button";

const ModalBackdrop = (props) => {
  const { onErrorHandler } = props;
  return (
    <div
      className="absolute top-0 left-0 z-10 h-[100vh] w-full bg-slate-900/75 "
      onClick={onErrorHandler}
    />
  );
};

const ModalCard = (props) => {
  const { onErrorTitle, onErrorMessage, onErrorHandler } = props;
  return (
    <Card className={"absolute top-1/4 left-0 right-0 z-40 mx-auto w-1/2"}>
      <header className="rounded-md bg-violet-700 p-4">
        <h1 className="text-left font-bold text-white">{onErrorTitle}</h1>
      </header>
      <article className="p-4">
        <p className="text-center">{onErrorMessage}</p>
      </article>
      <footer className="flex-end flex p-4 ">
        <Button
          typeButton={"button"}
          onClick={onErrorHandler}
          customClass={"mx-auto"}
        >
          OK
        </Button>
      </footer>
    </Card>
  );
};

const Modal = (props) => {
  const { onErrorTitle, onErrorMessage, onErrorHandler } = props;
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onErrorHandler={onErrorHandler} />,
        document.getElementById("modal-backdrop")
      )}

      {ReactDOM.createPortal(
        <ModalCard
          onErrorHandler={onErrorHandler}
          onErrorTitle={onErrorTitle}
          onErrorMessage={onErrorMessage}
        />,
        document.getElementById("modal-card")
      )}
    </React.Fragment>
  );
};

export default Modal;
