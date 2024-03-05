'user client'
import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    Tooltip,
    PointElement,
    LineElement,
    RadialLinearScale,
  } from "chart.js";
  import { Radar } from "react-chartjs-2";
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    RadialLinearScale
  );
function Chart() {
  const data = {
    labels: ['Sweet', 'Spicy', 'Bitter', 'Salty', 'Umami'], // this can grow
    datasets: [
      {
        label: 'Dataset 1',
        backgroundColor: 'rgba(179,181,198,0.2)',
        borderColor: 'rgba(179,181,198,1)',
        pointBackgroundColor: 'rgba(179,181,198,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(179,181,198,1)',
        data: [65, 59, 90, 81, 56],
      },
      {
        label: 'Dataset 2',
        backgroundColor: 'rgba(255,99,132,0.2)',
        borderColor: 'rgba(255,99,132,1)',
        pointBackgroundColor: 'rgba(255,99,132,1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255,99,132,1)',
        data: [28, 48, 40, 19, 96],
      },
    ],
  };

  const options = {
    scale: {
      ticks: { beginAtZero: true },
    },
  };
  return (
    <div>
      <h2>Radar Chart Example</h2>
      <Radar data={data} options={options} />
    </div>
  )
}

export default Chart