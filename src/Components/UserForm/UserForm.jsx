import React, { useState, useRef, Fragment } from "react";

import Button from "../UI/Button";
import Modal from "../Modal/Modal";

const UserForm = (props) => {
  const { onUser } = props;
  const usernameRef = useRef();
  const ageRef = useRef();
  console.log(usernameRef);

  const [error, setError] = useState(null);
  // const [username, setUsername] = useState('');
  // const [age, setAge] = useState('');

  // const userInputHandler = (e) => {
  //   setUsername(e.target.value);
  // };
  // const ageInputHandler = (e) => {
  //   setAge(e.target.value);
  // };

  const GenerateID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const submitInputHandler = (e) => {
    e.preventDefault();

    const usernameInputRef = usernameRef.current.value;
    const ageInputRef = ageRef.current.value;

    console.log(usernameInputRef);
    console.log(ageInputRef);

    if (
      usernameInputRef.trim().length === 0 ||
      ageInputRef.trim().length === 0
    ) {
      return setError({
        titleError: "Invalid Input",
        messageError: "Please enter a valid name and age (non-empty value).",
      });
    }

    if (+ageInputRef > 150 || +ageInputRef < 1) {
      return setError({
        titleError: "invalid Input Age",
        messageError: "Please enter a valid Age ( age > 0 & age < 150 )",
      });
    }

    const userInput = {
      usernameInputRef,
      ageInputRef,
      id: GenerateID(),
    };

    onUser(userInput);

    // setUsername('');
    // setAge('');

    usernameRef.current.value = "";
    ageRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <Fragment>
      {error && (
        <Modal
          onErrorTitle={error.titleError}
          onErrorMessage={error.messageError}
          onErrorHandler={errorHandler}
        />
      )}
      <form onSubmit={submitInputHandler}>
        <div className="flex flex-col gap-y-2">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // value={username}
            // onChange={userInputHandler}
            ref={usernameRef}
            className="rounded-md border border-black p-2"
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            // value={age}
            // onChange={ageInputHandler}
            ref={ageRef}
            className="rounded-md border border-black p-2"
          />

          <div className="flex flex-row justify-start">
            <Button typeButton={"submit"} customClass={"mx-auto"}>
              Add User
            </Button>
          </div>
        </div>
      </form>
    </Fragment>
  );
};

export default UserForm;
