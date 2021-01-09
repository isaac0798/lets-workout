import {loadUserWeightGraph} from './components/userWeightGraph.js';
import {loadUserWeightCalender} from './components/userWeightCalender';

export const showWeightGraph = (user) => {
  setUpWeightGraph(user);
}

const setUpWeightGraph = async (user) => {
  const response = await fetch(`${window.location.origin}/webapi/weight/1`);
  response.json().then((results) => {
    loadUserWeightGraph(results);
    loadUserWeightCalender(results);
  }); 
}
