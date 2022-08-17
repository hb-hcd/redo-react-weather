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

  // const changeBackground = ()=>{
  //   if(!weather) return "from-sky-500 to-indigo-500";
  //   const threshould = units === "metric" ? 27 : 80;
  //    if(weather.temp.toFixed()<=threshould) return "from-sky-500 to-indigo-500";
  //   return "from-yellow-400 to-orange-500"
  // }

  //loading animated background dynamically
  const loadBackground = ()=>{
    if(!weather){
      return `bg-[url('../public/images/Clear.gif')]`;
     
    } 
    const title = weather.main;
    switch(title){
      case 'Clouds': return `bg-[url('../public/images/Clouds.gif')]`
      case 'Clear': return  `bg-[url('../public/images/Clear.gif')]`
      case 'Rain': return `bg-[url('../public/images/Drizzle.gif')]` 
      case 'Drizzle': return `bg-[url('../public/images/Drizzle.gif')]`
      case 'Snow': return `bg-[url('../public/images/Snow.gif')]`
      case 'Thunderstorm': return `bg-[url('../public/images/Storm.gif')]`
      default: return `bg-[url('../public/images/Clouds.gif')]`
    }
    
  }
  //${weather && loadBackground()}

  return (
    <div className={`mx-auto max-w-screen-sm mt-4 py-10 px-20  
     shadow-lg  rounded-md shadow-blue-500/50 bg-cover ${weather && loadBackground()}`}>
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