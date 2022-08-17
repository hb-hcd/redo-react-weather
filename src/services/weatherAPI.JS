import { DateTime } from "luxon";
//https://api.openweathermap.org/data/2.5/weather?q=london&appid=33fe2c7bbf35b409e375473ceb489a70&units=metrics
//https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=minutely&appid=33fe2c7bbf35b409e375473ceb489a70&units=metrics

const Base_Url = "https://api.openweathermap.org/data/2.5"
const API_KEY = process.env.REACT_APP_API_KEY
const fetchWeather = async (type, searchParams) => {
    const url = new URL(Base_Url + "/" + type);
    //console.log(searchParams);
    url.search = new URLSearchParams({ ...searchParams, appid: API_KEY })
    const res = await fetch(url);
    const data = await res.json();
    const { country } = data.sys;
    const { name } = data;
    const { lon, lat } = data.coord;
    const { temp_min, temp_max } = data.main;
    return { lon, lat, country, name, temp_min, temp_max };

}

const fetchForescast = async (type, searchParams) => {
    const { lon, lat, country, name, temp_min, temp_max } = await fetchWeather("weather", searchParams)
    //console.log(searchParams);
    const url = new URL(Base_Url + "/" + type);
    url.search = new URLSearchParams({
        lat,
        lon,
        exclude: "minutely",
        appid: API_KEY,
        units: searchParams.units
    })
    const res = await fetch(url);
    const data = await res.json();
    // console.log(getFormattedData(data));
    //return getFormattedData(data);
    const formatdata = getFormattedData(data);
    const result = { country, name, temp_min, temp_max, ...formatdata };
    return result;

}

const getFormattedData = (data) => {
    //console.log(data);
    const { timezone } = data;
    const { dt, sunrise, sunset, temp, feels_like, humidity, uvi, wind_speed, weather } = data.current;
    const { id, main, icon } = weather[0];
    const hourlyForecast = data.hourly.slice(1, 6).map(h=>{
       return{
        id: h.dt,
        time: formattedTime(h.dt, timezone, 't'),
        icon: weatherPicUrl(h.weather[0].icon),
        temp: h.temp
       }
    });
    const dailyForecast = data.daily.slice(1, 6).map(d=>{
        return{
            id: d.dt,
            time:formattedTime(d.dt,timezone,'ccc'),
            icon: weatherPicUrl(d.weather[0].icon),
            temp: d.temp.day
        }
    });
    return { timezone, dt, sunrise, sunset, temp, feels_like, humidity, uvi, wind_speed, id, main, icon, hourlyForecast, dailyForecast }
}

const formattedTime = (dt, timezone, format = "DDDD' | Local time: 't") => {
    return DateTime.fromSeconds(dt).setZone(timezone).toFormat(format);
}
const weatherPicUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

export { fetchWeather, fetchForescast, formattedTime, weatherPicUrl };
