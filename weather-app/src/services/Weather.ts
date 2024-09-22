// TypeScript interphase for the Weather data

export interface WeatherDataInterface {
    
    name: string;
    sys: {
        country: string;
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
    hourly: Array<{ dt: number; temp: number }>;
    
}