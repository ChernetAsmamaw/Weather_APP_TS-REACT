import { WeatherDisplayWrapper } from "./Weather.module";

export const Header = () => {
    return (
        <WeatherDisplayWrapper>
            <header className="header">
                <div className="header-marquee">
                   Find the weather in any city today on
                   {" "}
                {   new Date().toLocaleDateString("en-US", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                })} at {new Date().toLocaleTimeString(
                    "en-US",
                    {
                        hour: "numeric",
                        minute: "numeric",
                    }
                )}{" "} Central African Time
                </div>
                
            </header>
        </WeatherDisplayWrapper>
    );
};
