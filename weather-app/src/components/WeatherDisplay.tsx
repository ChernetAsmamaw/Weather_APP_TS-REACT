// React component to display the weather details

// Importing the icons from react-icons library
import { WiHumidity } from 'react-icons/wi';
import { FaWind } from 'react-icons/fa';
import { RiLoader2Fill } from "react-icons/ri";

import React from 'react';
import { WeatherDisplayWrapper } from './Weather.module';
import { WeatherDataInterface } from '../services/Weather';
import { fetchCurrentWeather,  fetchWeatherData } from '../services/WeatherService'; // fetchHourlyWeatherData add later
import { iconChanger } from './WeatherIcon';
import { SearchBar } from './SearchBar';
import { Footer } from './Footer';
import { Header } from './Header';

// Soner library for toast notifications
import { Toaster, toast } from 'sonner';

import { WeatherGraph } from './WeatherGraph';
import { CityMap } from './WeatherMap';


export const WeatherDisplay = () => {

    // Create a state to store the weather data fetched from the API response
    const [weatherData, setWeatherData] = React.useState<WeatherDataInterface | null>(null);
    // Create a state to store the city name entered by the user in the input field
    const [searchCity, setSearchCity] = React.useState<string>("");
    // Create a loading state to show a loader while fetching the data
    const [isLoading, setIsLoading] = React.useState<boolean>(false);
    // Track if the details are visible or not
    const [showDetails, setShowDetails] = React.useState(false);
    // Create a state to store the hourly weather data
    const [ weatherDataHourly, setWeatherDataHourly ] = React.useState<WeatherDataInterface[]>([]);
  
    
    // Handels the search functionality when the user enters a city name in the input field
    const handleSearch = async () => {

        // Do not search if the input field is empty
        if (searchCity.trim() === "") {
          return;
        }

        
        // Find the weather data for the city
        try {
          const { currentWeatherData } = await fetchWeatherData(searchCity);

          
          // Extract the hourly data from the response
          const { lat, lon } = currentWeatherData.coord;
          // const hourlyWeatherData = await fetchHourlyWeatherData(lat, lon);

          setWeatherData(currentWeatherData);
          //setWeatherDataHourly(hourlyWeatherData.hourly);


        } catch (error: any) {
            // If the city is not found, show a toast notification
            toast.error("City not found");
            
        }
    };


    // Toggle the visibility of the dropdown button
    const toggleDetails = () => {
        setShowDetails(!showDetails); // Toggle the visibility of the dropdown
    };


    // Use React.useEffect to fetch the weather data when the component mounts
    React.useEffect(() => {
      const fetchData = async () => {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;

            // Fetch the current weather data for the user's location
            const [currentWeather /*, hourlyData */] = await Promise.all(
                [fetchCurrentWeather(latitude, longitude)
                //fetchHourlyWeatherData(latitude, longitude)
                ]
            );
            setWeatherData(currentWeather);
            console.log(currentWeather);

            // Transfer the hourly data to the required format
            //setWeatherDataHourly(hourlyData.hourly);


          setIsLoading(true);
        });
      };
  
      fetchData();
    }, []);


    return (

        <div>

            <WeatherDisplayWrapper>

                <Toaster position='top-center' /> {/* Ypu can use richColor, position, and duration props */}

                <Header />

                <div className="container" style={{
                    top: showDetails ? '106%' : '50%'  // Conditional change of top property
                }}>

                    <SearchBar searchCity={searchCity} setSearchCity={setSearchCity} handleSearch={handleSearch} />

                    
                    {weatherData && isLoading ? (
                        <>
                            <div className="weatherArea">
                                <h1>{weatherData.name}</h1>
                                <span>{weatherData.sys.country}</span>
                                <div className="weatherIcon">
                                    {iconChanger(weatherData.weather[0].main)}
                                </div>
                                <h1>{weatherData.main.temp.toFixed(0)}°C</h1>
                                <h2>{weatherData.weather[0].main}</h2>
                            </div>

                            

                            <div className="bottomInfoArea">
                                <div className="humidityLevel">
                                    <WiHumidity className="humidityIcon" />
                                    <div className="humid&windInfo">
                                        <h1>{weatherData.main.humidity}%</h1>
                                        <p>Humidity</p>
                                    </div>
                                </div>

                                <div className="windSpeed">
                                    <FaWind className="windIcon" />
                                    <div className="humid&windInfo">
                                        <h1>{weatherData.wind.speed} km/h</h1>
                                        <p>Wind Speed</p>
                                    </div>
                                </div>
                            </div>

                            {/* Button to toggle weather details */}
                            <button className="dropbtn" onClick={toggleDetails}>
                                {showDetails ? "Hide Weather Details" : "Show Weather Details"}
                            </button>
                            

                            {/* Dropdown for weather details */}
                            {showDetails && (
                                <>
                                    {/*{weatherDataHourly && <WeatherGraph hourlyData={weatherDataHourly} />} */}
                                    <CityMap lat={weatherData.coord.lat} lon={weatherData.coord.lon} name={weatherData.name} />
                                </>
                            )}



                        </> ) : (

                            <div className="loadingArea">
                                <RiLoader2Fill className="loadingIcon" />
                                <p>Loading...</p>


                            </div>

                            )
                    }

                </div>

                <Footer />

            </WeatherDisplayWrapper>

        </div>
    );
};

