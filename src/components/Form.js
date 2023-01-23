import React, { useEffect, useState } from "react";
import Location from "./Location";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Form(props) {
    let { search, setSearch } = props
    let navigate = useNavigate()

    const onChange = (evt) => {
        setSearch({ ...search, [evt.target.name]: evt.target.value })
    }
    const onSubmitSearch = (evt) => {
        evt.preventDefault()
        setSearch({ ...search, city: search.searchTerm, searchTerm: "" })
    }

    const onSubmitDirectLink = (evt) => {
        evt.preventDefault()
        axios.get(`https://api.geocodify.com/v2/geocode?api_key=8ead09d05bca83da6d21f53fd892789458dfd88f&q=${search.searchTerm}`)
        .then(res => {
            let data = res.data.response.features[0]
            let long = data.geometry.coordinates[0]
            let lat = data.geometry.coordinates[1]
            let displayLoc = data.properties.label
            setSearch({ ...search, city: search.searchTerm, long, lat, displayLoc, searchTerm: ""})
            
            navigate("/weather-app/weather")
        })
        .catch(err => console.error(err))
    }

    return (
        <div className="content">
            <form onSubmit={onSubmitSearch}>
                <label>
                    Type the U.S. city you want to search for the weather data here: <br></br>
                    <input type="text" name="searchTerm" placeholder='Type City Here' onChange={onChange} />
                </label>
                <br></br>
                 <button>Search for a U.S. city</button>
            </form>
            {search.city && <Location search={search} setSearch={setSearch} onChange={onChange} />}
            <hr></hr>
            <form onSubmit={onSubmitDirectLink}>
                <label>
                    Or select one of the major U.S. cities in the dropdown menu to get the weather forecast: <br></br>
                    <select name="searchTerm" onChange={onChange}>
                        <option value="">Select City Here</option>
                        <option value="New York City">New York City, NY</option>
                        <option value="Chicago">Chicago, IL</option>
                        <option value="San Francisco">San Francisco, CA</option>
                        <option value="Los Angeles">Los Angeles, CA</option>
                        <option value="Philadelphia">Philadelphia, PA</option>
                        <option value="Boston">Boston, MA</option>
                        <option value="Houston">Houston, TX</option>
                        <option value="San Diego">San Diego, CA</option>
                        <option value="Seattle">Seattle, WA</option>
                        <option value="Dallas">Dallas, TX</option>
                        <option value="Washington, D.C.">Washington, D.C.</option>
                    </select>
                </label><br></br>
                <button>Get weather forecast for a major U.S. City</button>
            </form>
        </div>

    )
}
