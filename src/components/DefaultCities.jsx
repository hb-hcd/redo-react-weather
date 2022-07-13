import React from 'react'

function DefaultCities() {
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
        <div className="text-xl flex flex-row justify-between items-center text-white py-5 mb-2">
            {cities.map(city => (
                <div key={city.id}
                     className="hover:cursor-pointer">
                     {city.name}
                </div>
            ))}
        </div>
    )
}

export default DefaultCities