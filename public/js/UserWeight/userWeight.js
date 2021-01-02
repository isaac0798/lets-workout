import ReactDom from 'react-dom'
import weightGraph from './components/insertWeight.jsx';

export const showWeightGraph = (user) => {
  setUpWeightGraph(user);
}

const setUpWeightGraph = async (user) => {
  const response = await fetch(`${window.location.origin}/webapi/weight/1`);
  response.json().then((results) => {
    ReactDom.render(weightGraph(results), document.getElementById("weightGraph"));
  }); 
}
