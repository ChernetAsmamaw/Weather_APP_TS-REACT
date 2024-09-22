# Weather Dashboard Application
# Weather Dashboard Application

A weather dashboard application built with React and TypeScript that allows users to search for and display detailed weather information for a specified city.

## Table of Contents
1. [General Info](#general-info)
2. [Technologies](#technologies)
3. [Setup](#setup)
4. [Features](#features)
5. [Advanced Features](#advanced-features)
6. [Status](#status)
7. [Team](#team)

## General Info
This project is a weather dashboard application that fetches weather data for a specified city using the OpenWeatherMap API. The application provides real-time weather details such as temperature, humidity, wind speed, and a graphical representation of temperature changes over the next 24 hours. The search feature allows users to easily input a city name and retrieve the relevant weather information.

## Technologies
This project is built with:
- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: A statically typed language that builds on JavaScript.
- **Axios**: A promise-based HTTP client used to fetch weather data from external APIs.
- **Styled-components**: A library for writing scoped CSS within JavaScript/TypeScript files.
- **React-icons**: A collection of popular icons for use in React applications.
- **Webpack**: Module bundlers for bundling the application.

## Setup
To set up and run this project locally:

1. Clone the repository:
    ```bash
    git clone https://github.com/Chester-Asmamaw/Weather_APP_TS-REACT.git
    ```
2. Navigate to the project directory:
    ```bash
    cd weather_app
    ```
3. Install dependencies:
    ```bash
    npm install
    ```
4. Start the development server:
    ```bash
    npm start
    ```
    This will start the application in development mode with hot module reloading.

## Features
- **Search by city**: Users can input a city name and retrieve the current weather details.
- **Weather details**: Displays temperature, humidity, wind speed, and a 24-hour temperature graph.
- **Error handling**: User-friendly error messages for invalid city names or network issues.
- **Loading states**: Displays a loading spinner while fetching data.
- **Responsive design**: Optimized for both mobile and desktop views.
- **State management**: Uses React context or Redux to manage application state.

## Advanced Features
- **24-hour graph**: Graphical representation of temperature changes over the next 24 hours (using a graph library like Chart.js).
- **PWA features (optional)**: Service workers for offline capability.

## Status
The project is currently in development. Future updates may include extended weather forecasts, map integration, and additional advanced features.

## Team
- **Developer**: Chernet Masresha Asmamaw
