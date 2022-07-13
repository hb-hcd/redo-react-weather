

const Forecast = ({title}) => {
  return (
    <div>
        <div className="flex flex-col my-4">
        <p className="text-md text-white font-md uppercase">{title}</p>
        <hr className="my-2" />
        <div className="flex flex-row justify-between text-white">
            <div className="flex flex-col items-center">
                <p className="text-sm">01:00 PM</p>
                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" className="w-12" />
                <p className="text-sm">17°</p>
            </div>
             <div className="flex flex-col items-center">
                <p className="text-sm">01:00 PM</p>
                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" className="w-12" />
                <p className="text-sm">17°</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm">01:00 PM</p>
                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" className="w-12" />
                <p className="text-sm">17°</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm">01:00 PM</p>
                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" className="w-12" />
                <p className="text-sm">17°</p>
            </div>
            <div className="flex flex-col items-center">
                <p className="text-sm">01:00 PM</p>
                <img src="http://openweathermap.org/img/wn/04n@2x.png" alt="" className="w-12" />
                <p className="text-sm">17°</p>
            </div>
        </div>
        </div>

    </div>
  )
}

export default Forecast