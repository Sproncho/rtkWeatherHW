import {api_key, base_url} from "../utils/constants";
import {putMessage, putWeatherInfo} from "../slices/weatherSlice";



export const fetchWeather = city => {
    return async (dispatch) => {
        dispatch(putMessage('Pending...'));
        try {
            const response = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`);
            const data = await response.json();
            const weatherInfo = {
                country: data.sys.country,
                city: data.name,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            };
            dispatch(putWeatherInfo(weatherInfo));
        } catch (e) {
            console.log(e);
            dispatch(putMessage('Enter correct city name'));
        }
    }
}