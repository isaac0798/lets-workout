import React from 'react';
import ReactDom from 'react-dom';
import moment from 'moment';
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const loadUserWeightCalender = (userWeightData) => {
   const datesInYear = monthArray.map((month) => getMonths(month, 2021)); 
   console.log(datesInYear);
   const squareList = datesInYear.flat().map((date) => {
    return <Square />
   });

  ReactDom.render(
    <div id="squareList">{squareList}</div>,
    document.getElementById('weightCalender')
  );
}

export const Square = (color) => {
  return <div className="weightSquare"></div>
}

function getMonths(month,year){
    var ar = [];
    var start = moment(year+"-"+month,"YYYY-MMM");
    for(var end = moment(start).add(1,'month');  start.isBefore(end); start.add(1,'day')){
        ar.push(start.format('DD/MM/YY'));
    }
    return ar;
}
