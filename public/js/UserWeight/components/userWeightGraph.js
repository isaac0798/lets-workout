import Chartjs from "chart.js";
import dateformat from "dateformat";

export const loadUserWeightGraph = (userWeightInfo) => {
  console.trace("user weight info", userWeightInfo);
  const ctx = document.getElementById('weightChart').getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: userWeightInfo.map(day => dateformat(day.date, "dd/mm/yy")),
          datasets: [{
              label: 'Weight',
              data: userWeightInfo.map(day => day.weight),
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 1)',
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: false
                  }
              }]
          }
      }
  });
}
