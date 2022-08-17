import React from 'react'

function DefaultCities({setCity}) {
    const cities = [
        {
            id: 1,
            name: "London"
        },
        {
            id: 2,
            name: "Tokyo"
        },
        {
            id: 3,
            name: "New York",
        },
        {
            id: 4,
            name: "Hong Kong"
        },
        {
            id: 5,
            name: "Sydney"
        },

    ]

    return (
        <div className="text-2xl sm:text-xl flex flex-col sm:flex-row  sm:justify-between items-center text-white py-5 mb-2">
            {cities.map(city => (
                <div key={city.id}
                     className="hover:cursor-pointer">
                        <button className="hover:scale-125 duration-200" onClick={()=>setCity({q:city.name})} >{city.name}</button>                    
                </div>
            ))}
        </div>
    )
}

export default DefaultCities