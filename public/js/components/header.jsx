import React from 'react';

export const userHeader = (user) => {
  console.log(user);

  return (
    <div id="header">
      <h1>Hello {user.displayName}</h1>
    </div>
  );
}
