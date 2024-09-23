import React from 'react';
import { WeatherDisplayWrapper } from './Weather.module';
import { FaGithub } from "react-icons/fa";
import { TiWeatherPartlySunny } from "react-icons/ti";
 

export const Footer = () => {
    return (
        <WeatherDisplayWrapper>
            <footer className="footer">
                <div className="footer-left">
                    <span className="footer-icon" onClick={() => window.location.href = 'https://chernetasmamaw.github.io/Weather_APP_TS-REACT/'}>
                        <a href="https://chernetasmamaw.github.io/Weather_APP_TS-REACT/">
                            <TiWeatherPartlySunny />
                        </a>
                    </span>
                </div>
                <div className="footer-center">
                    <p>Weather App for TypeScript & React Assignment &copy; {new Date().getFullYear()}</p>
                </div>
                <div className="footer-right">
                    <span className="footer-icon">
                        <a href="https://github.com/ChernetAsmamaw/Weather_APP_TS-REACT/">
                        <FaGithub />
                    </a>
                    </span>
                </div>
            </footer>
        </WeatherDisplayWrapper>
    );
};