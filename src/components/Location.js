import React, {useEffect, useState} from "react";
import axios from "axios";
import {Router, Routes, Route, Link} from "react-router-dom"

export default function Location(props){
    let {search, setSearch} = props
    const [results, setResults] = useState([])
    useEffect(()=>{
        axios.get(`http://api.geonames.org/searchJSON?q=${search.city}&maxRows=10&fuzzy=0.8&username=jpaweather`)
        .then(res=>{
            console.log(res.data.geonames)
            setResults(res.data.geonames)
        })
        .catch(err=>console.log(err))
    },[search.city])
    const onClick=(long, lat, displayLoc)=>{
        setSearch({...search, long: long, lat: lat, display: displayLoc})
    }

    return(
        <div className="search-weather">
            <h3>Click on the city you want to view the weather forecast for:</h3>
            {results.length !==0 && results.map(city=>{
                if (city.countryCode === "US") {
                    return(
                        <div key={city.geonameId}>
                        <Link onClick={()=>onClick(city.lng, city.lat, `${city.name}, ${city.adminCode1}`)} id="weather" to="/weather">{`${city.name}, ${city.adminCode1}`}</Link>
                        </div>
                )
                }

            })}
        </div>
    )
}
