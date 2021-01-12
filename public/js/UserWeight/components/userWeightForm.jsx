import React from 'react';
import ReactDom from 'react-dom';
import {debounce} from 'lodash';
import dateformat from 'dateformat';

export const userWeightForm = () => {
  console.log('hellooooo');
  ReactDom.render(weightForm(), document.getElementById("userWeightForm"));
}

const weightForm = () => {
  return (
    <form onSubmit={postUserWeight} id="userWeightForm">
      <label>Weight: </label>
      <input id="weightInput" type="text" onKeyPress={debounce(verifyWeight, 1000)} />
      <label>Date: </label>
      <input id="dateInput" type="date" />
      <input type="submit" />
    </form>
  );
}

const postUserWeight = () => {
  const weightInput = parseFloat(document.getElementById("weightInput").value);
  const actualDate = new Date();
  const inputDate = new Date(document.getElementById("dateInput").value);
  const date = inputDate <= actualDate ? inputDate : actualDate;
  const formattedDate = dateformat(date, "yyyy-mm-dd");
  const body = {
    "weight": weightInput,
    "date": formattedDate,
    "unit": "lbs"
  }

  debugger;
  fetch(`${window.location.origin}/webapi/weight`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify(body)
  })

  window.location.reload();
}

const verifyWeight = (event) => {
  console.log('test');
  if (isNaN(parseInt(event.key)) && event.key !== ".") {
    return false;
  }

  console.log('weight verified');
}
