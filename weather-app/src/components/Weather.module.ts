import styled from "styled-components";

export const WeatherDisplayWrapper = styled.div`
    background: white;
    font-family: 'Roboto', sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 70px; /* Adjusts the gap under the header */
    min-height: 15vh;
    margin: 0;

    .container {
        background: linear-gradient(90deg, #e8f0f2 0%, #f9f9f9 100%);
        border-radius: 12px;
        padding: 2vh 2vw;
        margin: -15vh auto 0;
        box-shadow: 0 0px 20px rgb(0 0 0 / 20%);
        box-sizing: border-box;
        color: rgba(0, 0, 0, 0.8);
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-direction: column;
        width: 80%;
        max-width: 550px;
        z-index: 999;
        transition: top 0.3s ease;
    }

    .searchArea {
        margin-top: 20px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        width: 100%;
        padding: 10px;

        > input {
            outline: none;
            border: 1px solid grey;
            padding: 10px;
            border-radius: 20px;
            text-align: center;
            width: 75%;
            background: transparent;
            font-size: 18px;
        }

        .searchCircle {
            border: 1px solid grey;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            cursor: pointer;

            .searchIcon {
                font-size: 25px;
                color: grey;
            }
        }
    }

    .weatherArea {
        display: flex;
        align-items: center;
        flex-direction: column;
        margin: 30px 0;

        .weatherIcon {
            padding: 6px;
            font-size: 8rem;
        }

        h1 {
            font-size: 2.5rem;
        }

        span {
            margin-bottom: 10px;
        }

        h2 {
            font-size: 1.8rem;
            font-weight: 400;
        }
    }

    .bottomInfoArea {
        display: flex;
        align-items: center;
        justify-content: space-around;
        margin: 10px;
        background: linear-gradient(90deg, rgba(243, 255, 253, 1) 0%, rgba(253, 255, 232, 1) 100%);
        border-radius: 12px;
        padding: 10px;
        width: 100%;

        .humidityLevel,
        .windSpeed {
            display: flex;
            align-items: center;
            margin: 0 10px;
        }

        .humidityIcon {
            font-size: 2.5rem;
        }

        .windIcon {
            font-size: 1.8rem;
            margin-right: 10px;
        }
    }

    .loadingArea {
        height: 400px;
        width: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index: 9999;

        .loadingIcon {
            font-size: 3rem;
            animation: spin 2s linear infinite;
        }

        p {
            font-size: 22px;
            margin-top: 10px;
        }
    }

    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .dropbtn {
        background-color: #073b4c;
        color: white;
        padding: 10px;
        border-radius: 8px;
        font-size: 16px;
        border: none;
        cursor: pointer;
        margin: 20px;
    }

    .weather-detail {
        margin-top: 20px;
        background-color: #f9f9f9;
        border: 1px solid #ddd;
        padding: 20px;
        width: 100%;
    }

    .weather-detail h3 {
        margin-bottom: 10px;
        font-size: 20px;
        font-weight: 500;
        padding: 15px;
    }
    
    .header {
        background: #f9f9f9;
        padding: 10px 0;
        position: fixed;
        width: 100%;
        top: 0;
        z-index: 1000;
    }

    .header-marquee {
        color: black;
        font-size: 14px
        font-family: Fira Sans;
        font-style: italic;
        z-index: 1000;
        white-space: nowrap;
        animation: marquee 30s linear infinite;
    }

    @keyframes marquee {
        0% {
            transform: translateX(100%);
        }
        100% {
            transform: translateX(-100%);
        }
    }

    .header-marquee:hover {
        animation-play-state: paused;
    }

    .footer {
        background: linear-gradient(90deg, #e8f0f2 0%, #f9f9f9 100%);
        color: black;
        position: fixed;
        bottom: 0;
        width: 100%;
        text-align: center;
        padding: 10px 10px;
        font-size: 14px;
        font-weight: 500;
        z-index: 1000;
        box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.1);
        display: flex;
        justify-content: space-between;
        align-items: center;

        .footer-left,
        .footer-right {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer-left {
            justify-content: flex-start;
            padding-left: 25px;
        }

        .footer-right {
            justify-content: flex-end;
            padding-right: 25px;
        }

        .footer-center {
            flex: 2;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .footer-icon {
            margin: 0 10px;
            font-size: 20px;
            cursor: pointer;
            transition: color 0.3s ease;

            &:hover {
                color: #ffd700;
            }
        }
        
    
    }

    /* Enhanced Media Queries for better responsiveness */
    @media (max-width: 1024px) {
        .container {
            width: 90%;
            padding: 4vw;
        }

        .weatherIcon {
            font-size: 6rem;
        }

        h1 {
            font-size: 2rem;
        }

        h2 {
            font-size: 1.5rem;
        }

        .searchArea > input {
            font-size: 16px;
        }
    }

    @media (max-width: 768px) {
        .container {
            width: 95%;
            padding: 3vw;
        }

        .weatherIcon {
            font-size: 5rem;
        }

        h1 {
            font-size: 1.8rem;
        }

        h2 {
            font-size: 1.3rem;
        }

        .searchArea > input {
            width: 70%;
            font-size: 14px;
        }

        .dropbtn {
            padding: 8px;
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        .container {
            padding: 10px;
            margin: 3vh auto;
        }

        .weatherIcon {
            font-size: 4rem;
        }

        h1 {
            font-size: 1.5rem;
        }

        h2 {
            font-size: 1.2rem;
        }

        .searchArea > input {
            width: 65%;
            font-size: 12px;
        }

        .dropbtn {
            padding: 6px;
            font-size: 12px;
        }
    }
`;
