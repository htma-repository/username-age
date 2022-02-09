import React from 'react';

import Card from '../UI/Card';
import UserForm from './UserForm';

const UserFormWrapper = ({ onUserObj }) => {
  const userFormhandler = (enteredUser) => {
    onUserObj(enteredUser);
  };

  return (
    <Card>
      <UserForm onUser={userFormhandler} />
    </Card>
  );
};

export default UserFormWrapper;
