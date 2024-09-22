// TypeScript interphase for the Weather data

export interface WeatherDataInterface {

    name: string;
    sys: {
        country: string;
        sunrise: number;
        sunset: number;
    };
    main: {
        temp: number;
        humidity: number;
    };
    wind: {
        speed: number;
    };
    weather: [
        {
            main: string;
            icon: string;
        }
    ];
    coord: {
        lon: number;
        lat: number;
    };
    dt: number;
    timezone: number;
    dt_txt: string;
}

// Props for the hourly weather data
export interface HourlyWeatherData {
    temp: number;
    dt: number;
    dt_txt: string;
}