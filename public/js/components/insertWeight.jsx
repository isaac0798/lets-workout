import React from 'react';

export const userHeader = (user) => {
  return (
    <div id="header">
      <h1>Welcome {user.displayName}, Lets Workout!</h1>
      <div id="headerOptions">
        <img src={user.photos[0].value} />
      </div>
    </div>
  );
}
