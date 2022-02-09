import React, { useState } from 'react';

import Button from '../UI/Button';
import Modal from '../Modal/Modal';

const UserForm = ({ onUser }) => {
  const [username, setUsername] = useState('');
  const [age, setAge] = useState('');
  const [error, setError] = useState(null);

  const userInputHandler = (e) => {
    setUsername(e.target.value);
  };
  const ageInputHandler = (e) => {
    setAge(e.target.value);
  };

  const GenerateID = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
  };

  const submitInputHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        titleError: 'Invalid Input',
        messageError: 'Please enter a valid name and age (non-empty value).',
      });
      return;
    }

    if (age < 1) {
      setError({
        titleError: 'invalid Input Age',
        messageError: 'Please enter a valid Age (> 0)',
      });
      return;
    }

    const userInput = {
      username,
      age,
      id: GenerateID(),
    };

    onUser(userInput);

    setUsername('');
    setAge('');
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
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
            value={username}
            onChange={userInputHandler}
            className="border border-black rounded-md"
          />
          <label htmlFor="age">Age(Years)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageInputHandler}
            className="border border-black rounded-md"
          />

          <div className="flex flex-row justify-start">
            <Button typeButton={'submit'}>Add User</Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default UserForm;
