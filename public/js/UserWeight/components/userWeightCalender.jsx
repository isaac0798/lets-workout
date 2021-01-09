import React from 'react';
import ReactDom from 'react-dom';
import dateformat from 'dateformat';
import moment from 'moment';
const monthArray = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

export const loadUserWeightCalender = (userWeightData) => {
   const datesInYear = monthArray.map((month) => getMonths(month, 2021)); 
   const squareList = datesInYear.flat().map((date, i) => {
    const formattedDate = date;
    const dateMatch = userWeightData.find((data) => {
      const formattedUserDate = dateformat(data.date, "dd/mm/yy");
      return date === formattedUserDate;
    })

    if (dateMatch) {
      return <Square matched={true}/>
    }
    return <Square matched={false}/>
   });

  ReactDom.render(
    <div id="squareList">{squareList}</div>,
    document.getElementById('weightCalender')
  );
}

export const Square = (props) => {
  if (!props.matched) {
    return <div className="weightSquare"></div>
  }

  return <div className="matchedWeightSquare"></div>
}

function getMonths(month,year){
    var ar = [];
    var start = moment(year+"-"+month,"YYYY-MMM");
    for(var end = moment(start).add(1,'month');  start.isBefore(end); start.add(1,'day')){
        ar.push(start.format('DD/MM/YY'));
    }
    return ar;
}
