import {formattedTime} from '../services//weatherAPI'

function CityAndTime({data}) {
  const{ timezone,dt, name, country,main} = data
  const timeAndDate = formattedTime(dt,timezone);

  return (
    <div className="py-4 flex flex-col justify-between items-center text-white">
        <div className="font-light text-xl py-2">
            {timeAndDate}
        </div>
        <div className="sm:text-2xl font-bold py-4 text-lg">{name}, {country}</div>
        <div className="text-xl text-cyan-100 py-2">{main}</div>
    </div>
  )
}

export default CityAndTime