import React from 'react';
import dateFormat from 'dateformat';

const weightGraph = (userWeightData) => {
  const weightData = userWeightData.map((userWeight) => 
    <p>{userWeight.weight} {userWeight.unit} {dateFormat(userWeight.date,
      "dddd, mmmm dS"
    )}</p>
  );

  return (
    <ol>{weightData}</ol>
  );
}

export default weightGraph;
