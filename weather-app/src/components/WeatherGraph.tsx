import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { WeatherDataInterface } from '../services/Weather';

interface WeatherDetailProps {
  weatherData: WeatherDataInterface;
}

export const WeatherDetail: React.FC<WeatherDetailProps> = ({ weatherData }) => {
  // Convert UNIX timestamp to a readable time format
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp * 1000);
    return `${date.getHours()}:00`;
  };

  // Ensure hourlyData is properly set
  const hourlyData = weatherData.hourly ?? [];

  // Debugging: Log the hourly data to ensure it's coming through correctly
  useEffect(() => {
    console.log('Hourly Data:', hourlyData);
  }, [hourlyData]);

  return (
    <div className="weather-detail" style={{ padding: '20px', width: '100%', boxSizing: 'border-box' }}>
      <h2>Weather Details for {weatherData.name}</h2>

      <div className="temperature-graph" style={{ height: '400px', width: '400px'}}>
        <h3>Temperature Changes (Next 24 Hours)</h3>
        {hourlyData.length > 0 ? (
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={hourlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="dt" tickFormatter={formatTime} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="temp" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <p>Loading hourly data...</p>
        )}
      </div>
    </div>
  );
};
