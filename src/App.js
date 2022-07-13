import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import DefaultCities from './components/DefaultCities'
import SearchBar from './components/SearchBar'
import CityAndTime from './components/CityAndTime'
import WeatherDetails from './components/WeatherDetails'
import Forecast from './components/Forecast'

function App() {
  return (
    <div className="mx-auto max-w-screen-sm mt-4 py-4 px-20 bg-gradient-to-tr 
    from-sky-500 to-indigo-500 shadow-lg  rounded-md shadow-blue-500/50 b">
      <DefaultCities />
      <SearchBar/>
      <CityAndTime/>
      <WeatherDetails/>
      <Forecast title={"Hourly Forecast"}/>
      <Forecast title={"Daily Forecast"}/>
    </div>
  );
}

export default App;
