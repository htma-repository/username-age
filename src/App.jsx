import React, { useState } from "react";

import UserFormWrapper from "./Components/UserForm/UserFormWrapper";
import UserList from "./Components/UserList/UserList";

const App = () => {
  const [newUser, setNewUser] = useState([]);

  const userObjHandler = (userObject) => {
    setNewUser((prevState) => {
      console.table([userObject, ...prevState]);
      return [userObject, ...prevState];
    });
  };

  const emptyList = newUser.length <= 0 && (
    <h3 className="text-center font-bold text-white">
      No Users found. Maybe add one?
    </h3>
  );

  return (
    <section className="App">
      <UserFormWrapper onUserObj={userObjHandler} />
      {emptyList}
      <UserList onUserList={newUser} onSetNewUser={setNewUser} />
    </section>
  );
};

export default App;
