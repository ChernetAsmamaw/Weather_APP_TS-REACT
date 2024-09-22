// A service to fetch weather data from the OpenWeatherMap API usinf Axios

import axios from 'axios';
import { WeatherDataInterface } from './Weather';


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

// Function to fetch the weather data for the next 24 hours
export const fetchHourlyWeatherData = async (lat: number, lon: number) => {
  // Use OpenWeatherMap's One Call API to fetch hourly weather data
  const url = `${api_base}onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,daily&appid=${api_key}&units=metric`;
  const response = await axios.get(url);
  return response.data.hourly;
}

