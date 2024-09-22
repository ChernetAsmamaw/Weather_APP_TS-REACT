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
        feels_like: number;
        temp_min: number;
        temp_max: number;
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
}