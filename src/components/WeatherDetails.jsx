import { 
    UilTemperature, 
    UilTear, 
    UilWind, 
    UilSun, 
    UilSunset,
    UilArrowUp,
    UilArrowDown} from '@iconscout/react-unicons'

const WeatherDetails = () => {
  return (
    <div className="flex flex-col text-white"> 
        <div className="flex flex-row justify-around items-center">
            <div className="ml-1">
            <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" />      

            </div>
            <div>
            <p className="text-4xl">18°</p>

            </div>

            <div className="flex flex-col">
                <div className="flex flex-row">
                    <UilTemperature/>
                    <p className="text-sm">Feels like: 17°</p>
                </div>
                <div className="flex flex-row">
                    <UilTear/>
                    <p className="text-sm">Humidity: 47%</p>
                </div>
                <div className="flex flex-row">
                    <UilWind/>
                    <p className="text-sm">Wind: 5 km/h</p>
                </div>
            </div>
        </div>        
         <div className="flex flex-row justify-between font-light text-sm ">
            <div className="flex flex-row">
                <UilSun/>
                <p>Rise: </p>
                <p>6:45 AM</p>
            </div>
            |
            <div className="flex flex-row">
                <UilSunset/>
                <p>Rise: </p>
                <p>6:45 AM</p>
            </div>
            |
            <div className="flex flex-row">
                <UilArrowUp/>
                <p>High: </p>
                <p>19°</p>
            </div>
            |
            <div className="flex flex-row">
                <UilArrowDown/>
                <p>Low: </p>
                <p>15°</p>
            </div>
         </div>
    </div>
  )
}

export default WeatherDetails