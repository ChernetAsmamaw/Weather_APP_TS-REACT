import React from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { HourlyWeatherData } from '../services/Weather';

interface WeatherGraphProps {
  hourlyData: HourlyWeatherData[];
}

export const WeatherGraph: React.FC<WeatherGraphProps> = ({ hourlyData }) => {
  // Check if hourlyData is sorted by date-time
  const sortedData = hourlyData.sort((a, b) => new Date(a.dt_txt).getTime() - new Date(b.dt_txt).getTime());

  // Log data to check if it's in the right order
  console.log('Sorted hourly data:', sortedData);

  const formatTime = (dt_txt: string) => {
    const date = new Date(dt_txt);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format as "HH:MM"
  };

  // Data for the Line chart
  const data = {
    labels: sortedData.map((data) => formatTime(data.dt_txt)), // Format time only
    datasets: [
      {
        label: 'Average Temperature (°C)',
        data: sortedData.map((data) => data.temp), // Temp data from sorted hourlyData
        fill: false,
        backgroundColor: 'rgba(54,162,175,0.2)', // Teal background color
        borderColor: 'rgba(54,162,175,1)',       // Teal border color
        tension: 0.1,
      },
    ],
  };

  // Styling options for the Line chart
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows for resizing
    aspectRatio: 1.5, // Increase this to make the graph bigger
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time',
        },
        ticks: {
          autoSkip: true,
          maxTicksLimit: 10,
        },
      },
      y: {
        title: {
          display: true,
          text: 'Temperature (°C)',
        },
        beginAtZero: false,
      },
    },
  };

  return (
    <div style={{ 
      width: '80%',
      height: '400px',
      paddingBottom: '20px',
      margin: 'auto',
      paddingTop: '20px',
       }}>
      <Line data={data} options={options} />
    </div>
  );
};
