import React from 'react';
import {useSelector} from "react-redux";

const Weather = () => {
    const {message, weatherInfo} = useSelector(state => state.weather);

    return (
        <div className='infoWeath'>
            {!message &&
                <div>
                    <p>Location: {weatherInfo.country}, {weatherInfo.city}</p>
                    <p>Temp: {weatherInfo.temp}</p>
                    <p>Pressure: {weatherInfo.pressure}</p>
                    <p>Sunset: {new Date(weatherInfo.sunset * 1000).toLocaleTimeString()}</p>
                </div>}
            <p>{message}</p>
        </div>
    );


};

export default Weather;