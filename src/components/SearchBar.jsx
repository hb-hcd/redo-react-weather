
import { UilSearch } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { useState } from 'react'


const SearchBar = ({ setCity, setUnits, city, unit }) => {
    const [query, setQuery] = useState("")
    const handleSearch = () => {
        setCity({ q: query })
    }
    const handleUnit = (e) => {
        const currentUnit = e.currentTarget.name;
        if (unit !== currentUnit) setUnits(currentUnit)
    }

    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setCity({ lat, lon })
            }

            )
        }
    }
    return (
        <div className="py-4 flex flex-row justify-between items-center">
            <div className="w-4/5 flex flex-row items-center">
                <input className=" w-3/4 text-xl p-2 h-10  rounded-md mr-2 shadow-xl focus:outline-none
                capitalize placeholder:lowercase font-light"
                    placeholder="search the city..."
                    type="text"
                    defaultValue={city}
                    onChange={(e) => setQuery(e.currentTarget.value)}
                />
                <UilSearch size={25}
                    className="text-white mx-1 hover:scale-125 duration-200 hover:cursor-pointer"
                    onClick={() => handleSearch()}
                />
                <UilLocationPoint size={25}
                    className="text-white  hover:scale-125 duration-200 hover:cursor-pointer"
                    onClick={() => handleLocation()}
                />
            </div>
            <div className="text-white w-1/5 items-center justify-end flex flex-row">
                <button
                    name="metric"
                    className="text-xl font-light px-1 hover:scale-125 duration-200"
                    onClick={(e) => handleUnit(e)}
                >°C</button>
                <p className="pl-1 text-xl">|</p>
                <button
                    name="imperial"
                    className="text-xl font-light px-1 hover:scale-125 duration-200"
                    onClick={(e) => handleUnit(e)}
                >°F</button>
            </div>
        </div>
    )
}

export default SearchBar