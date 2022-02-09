import React, { useState } from 'react';

import UserFormWrapper from './Components/UserForm/UserFormWrapper';
import UserList from './Components/UserList/UserList';

function App() {
  const [newUser, setNewUser] = useState([]);

  const userObjHandler = (userObject) => {
    setNewUser((prevGoals) => {
      const updateUser = [...prevGoals];
      updateUser.unshift({ ...userObject });
      console.log(updateUser);
      return updateUser;
    });
  };

  const content =
    newUser.length > 0 ? (
      <UserList onUserList={newUser} />
    ) : (
      <h3 className="text-center font-bold">No Users found. Maybe add one?</h3>
    );

  return (
    <section className="App">
      <UserFormWrapper onUserObj={userObjHandler} />
      {content}
    </section>
  );
}

export default App;
