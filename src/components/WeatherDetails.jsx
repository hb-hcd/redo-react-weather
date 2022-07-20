import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
    UilArrowUp,
    UilArrowDown
} from '@iconscout/react-unicons'
import { weatherPicUrl, formattedTime } from '../services/weatherAPI'

const WeatherDetails = ({ data }) => {
    const { temp, temp_min, temp_max, sunrise, sunset, feels_like, humidity, wind_speed, timezone, icon } = data;
    const risetime = formattedTime(sunrise, timezone, 't');
    const settime = formattedTime(sunset, timezone, 't');
    const weather = weatherPicUrl(icon);
    return (
        <div className="flex flex-col text-white">
            <div className="flex flex-row justify-between items-center">
                <div className="ml-1">
                    <img src={weather} alt="" />
                </div>
                <div>
                    <p className="text-4xl">{temp.toFixed()}°</p>
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-row">
                        <UilTemperature />
                        <p className="text-sm ml-2">Feels like: {feels_like.toFixed()}°</p>
                    </div>
                    <div className="flex flex-row">
                        <UilTear />
                        <p className="text-sm ml-2">Humidity: {humidity}%</p>
                    </div>
                    <div className="flex flex-row">
                        <UilWind />
                        <p className="text-sm ml-2">Wind: {wind_speed.toFixed()} km/h</p>
                    </div>
                </div>
            </div>
            <div className="flex flex-row justify-between font-light text-sm ">
                <div className="flex flex-row">
                    <UilSun />
                    <p>Rise: </p>
                    <p>{risetime}</p>
                </div>
                |
                <div className="flex flex-row">
                    <UilSunset />
                    <p>Set: </p>
                    <p>{settime}</p>
                </div>
                |
                <div className="flex flex-row">
                    <UilArrowUp />
                    <p>High: </p>
                    <p>{temp_max.toFixed()}°</p>
                </div>
                |
                <div className="flex flex-row">
                    <UilArrowDown />
                    <p>Low: </p>
                    <p>{temp_min.toFixed()}°</p>
                </div>
            </div>
        </div>
    )
}

export default WeatherDetails