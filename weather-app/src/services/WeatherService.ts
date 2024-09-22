// A service to fetch weather data from the OpenWeatherMap API usinf Axios
import React from 'react';
import axios from 'axios';
import { WeatherDataInterface, HourlyWeatherData } from './Weather';


const api_key = process.env.REACT_APP_OPEN_WEATHER_API;
const api_base = "https://api.openweathermap.org/data/2.5/";

// Function to fetch the current weather data using user's location
export const fetchCurrentWeather = async (lat: number, lon: number) => {
  const url = `${api_base}weather?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;
  const response = await axios.get(url);
  return response.data;
};


// Function to fetch the weather data using the city name
export const fetchWeatherData = async (city: string) => {
  try {
    const url = `${api_base}weather?q=${city}&appid=${api_key}&units=metric`;
    const response = await axios.get(url);
    const currentWeatherData: WeatherDataInterface = response.data;
    return { currentWeatherData };
  } catch (error) {
    // If error isn't thrown by axios, throw a new error
    throw error;
  }
};


// Function to fetch the hourly weather data for the next 24 hours
export const fetchHourlyWeatherData = async (secs: number, lat: number, lon: number): Promise<HourlyWeatherData[]> => {
  // Fetch hourly weather data using lat and lon
  const url = `${api_base}/forecast?lat=${lat}&lon=${lon}&appid=${api_key}&units=metric`;

  const response = await fetch(url);
  const data = await response.json();

  if (!data.list) {
    throw new Error('No hourly data found');
  }

  // Filter and map the data to get only the required hourly data
  const hourlyData = data.list
    .filter((f: any) => f.dt > secs) // Filter based on time
    .slice(0, 24) // Get only the next 24 hours
    .map((d: any) => ({
      temp: d.main.temp,
      dt: d.dt,
      dt_txt: d.dt_txt,
    }));

  return hourlyData;
};
