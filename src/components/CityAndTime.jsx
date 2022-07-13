import React from 'react'

function CityAndTime() {
  return (
    <div className="py-4 flex flex-col justify-between items-center text-white">
        <div className="font-light text-xl py-2">
            Tuesday, 31 May 2022 | Local time 12:17 PM
        </div>
        <div className="text-2xl font-bold py-4">Winnipeg, CA</div>
        <div className="text-xl text-cyan-100 py-2">Cloudy</div>
    </div>
  )
}

export default CityAndTime