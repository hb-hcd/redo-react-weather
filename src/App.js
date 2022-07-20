import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import DefaultCities from './components/DefaultCities'
import SearchBar from './components/SearchBar'
import CityAndTime from './components/CityAndTime'
import WeatherDetails from './components/WeatherDetails'
import Forecast from './components/Forecast'
import { fetchForescast, fetchWeather, formattedTime } from './services/weatherAPI.js';
import { useState, useEffect } from 'react';


function App() {

  const [city, setCity] = useState({q: "Winnipeg"});
  const [units, setUnits] = useState("metric")
  //const [params, setParams] = useState({ q: city, units })
  const [weather, setWeather] = useState(null)
  

  useEffect(() => {
   
    const fetchData = async () => {
     await fetchForescast("onecall", {...city,units}).then(data => setWeather(data))
    }
    fetchData();

  }, [city, units])
  //fetchForescast("onecall",params)

  const changeBackground = ()=>{
    if(!weather) return "from-sky-500 to-indigo-500";
    const threshould = units === "metric" ? 27 : 80;
     if(weather.temp.toFixed()<=threshould) return "from-sky-500 to-indigo-500";
    return "from-yellow-400 to-orange-500"
  }

  return (
    <div className={`mx-auto max-w-screen-sm mt-4 py-10 px-20 bg-gradient-to-tr 
     shadow-lg  rounded-md shadow-blue-500/50  ${changeBackground()}`}>
      <DefaultCities setCity={setCity} />
      <SearchBar setCity={setCity} setUnits={setUnits} unit={units}/>
      {
        weather &&
        <div>
          <CityAndTime data={weather}/>
          <WeatherDetails data={weather}/>
          <Forecast title={"Hourly Forecast"} data={weather.hourlyForecast} />
          <Forecast title={"Daily Forecast"}  data={weather.dailyForecast}/>
        </div>
      }


    </div>
  );
}

export default App;
