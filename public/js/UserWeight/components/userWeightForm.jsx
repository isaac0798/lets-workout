import React from 'react';
import ReactDom from 'react-dom';

export const userWeightForm = () => {
  console.log('hellooooo');
  ReactDom.render(weightForm(), document.getElementById("userWeightForm"));
}

const weightForm = () => {
  return (
    <form onSubmit={postUserWeight} id="userWeightForm">
      <label>Weight: </label>
      <input type="text" />
      <label>Date: </label>
      <input type="date" />
      <input type="submit" />
    </form>
  );
}

const postUserWeight = () => {
  console.log('hello');
}
