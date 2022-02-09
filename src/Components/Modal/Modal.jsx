import React from 'react';
import ReactDOM from 'react-dom';

import Card from '../UI/Card';
import Button from '../UI/Button';

const ModalBackdrop = ({ onErrorHandler }) => {
  return (
    <div
      className="absolute top-0 left-0 w-full h-[100vh] z-10 bg-slate-900/75 "
      onClick={onErrorHandler}
    />
  );
};

const ModalCard = ({ onErrorTitle, onErrorMessage, onErrorHandler }) => {
  return (
    <Card
      className={
        'absolute z-[100] mx-auto left-[1%] top-1/4 sm:left-[20%] lg:left-1/3'
      }
    >
      <header className="bg-violet-700 p-4 rounded-md">
        <h1 className="text-left font-bold text-white">{onErrorTitle}</h1>
      </header>
      <article className="p-4">
        <p className="text-center">{onErrorMessage}</p>
      </article>
      <footer className="flex flex-end p-4 ">
        <Button typeButton={'button'} onClick={onErrorHandler}>
          OK
        </Button>
      </footer>
    </Card>
  );
};

const Modal = ({ onErrorTitle, onErrorMessage, onErrorHandler }) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <ModalBackdrop onErrorHandler={onErrorHandler} />,
        document.getElementById('modal-backdrop')
      )}

      {ReactDOM.createPortal(
        <ModalCard
          onErrorHandler={onErrorHandler}
          onErrorTitle={onErrorTitle}
          onErrorMessage={onErrorMessage}
        />,
        document.getElementById('modal-card')
      )}
    </React.Fragment>
  );
};

export default Modal;
