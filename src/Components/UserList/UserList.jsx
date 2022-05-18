import React from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";

const UserList = (props) => {
  const { onUserList, onSetNewUser } = props;

  const deleteListHandler = (listId) => {
    const todoFilter = onUserList.filter((td) => {
      return td.id !== listId;
    });

    console.table(todoFilter);

    // eslint-disable-next-line no-restricted-globals
    confirm("delete activity?")
      ? onSetNewUser(todoFilter)
      : onSetNewUser(onUserList);
  };

  return (
    <Card className={`${onUserList.length <= 0 ? "hidden" : ""}`}>
      <ul className="flex flex-col gap-y-3">
        {onUserList.map((list) => {
          return (
            <li
              key={list.id}
              className="flex flex-row justify-between border border-slate-400 p-2"
            >
              <h2>
                {list.usernameInputRef} ({list.ageInputRef} years old)
              </h2>
              <Button onClick={deleteListHandler.bind(this, list.id)}>
                Delete
              </Button>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
