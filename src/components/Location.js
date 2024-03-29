import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom"

export default function Location(props) {
    let { search, setSearch } = props
    const [results, setResults] = useState([])
    useEffect(() => {
        axios.get(`https://api.geocodify.com/v2/geocode?api_key=8ead09d05bca83da6d21f53fd892789458dfd88f&q=${search.city}`)
            .then(res => {
                setResults(res.data.response.features)
            })
            .catch(err => console.error(err))
    }, [search.city])
    const onClick = (city) => {
        let lat = city.geometry.coordinates[1]
        let long = city.geometry.coordinates[0]
        let displayLoc = city.properties.label
        setSearch({ ...search, long, lat, displayLoc })
    }


    return (
        <div className="content">
            <h3>Click on the city you want to view the weather forecast for:</h3>
            {results.length !== 0 && results.map(city => {
                if (city.properties.country_code === "US") {
                    return (
                        <div key={city.properties.id}>
                            <Link onClick={() => onClick(city)} id="weather" to="/weather-app/weather">{city.properties.label}</Link>
                        </div>
                    )
                }

            })}
        </div>
    )
}
