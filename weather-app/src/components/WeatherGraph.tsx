import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { WeatherDataInterface } from '../services/Weather';

interface WeatherGraphProps {
  hourlyData: WeatherDataInterface[];
}

export const WeatherGraph: React.FC<WeatherGraphProps> = ({ hourlyData }) => {
  const data = {
    labels: hourlyData.map((data) => data.dt),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: hourlyData.map((data) => data.main.temp),
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.1, // Adds a smoothing effect
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10, // Limit the number of ticks
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        beginAtZero: false, // Start from the lowest temperature
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default WeatherGraph;