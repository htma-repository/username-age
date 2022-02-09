import React from 'react';

import Card from '../UI/Card';

const UserList = ({ onUserList }) => {
  return (
    <Card>
      <ul className="flex flex-col gap-y-3">
        {onUserList.map((list) => {
          return (
            <li key={list.id} className="border border-slate-400 p-2">
              <h2>
                {list.username} ({list.age} years old)
              </h2>
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
