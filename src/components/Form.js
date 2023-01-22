import React, { useEffect, useState } from "react";
import Location from "./Location";

export default function Form(props) {
    let { search, setSearch } = props
    const onChange = (evt) => {
        setSearch({ ...search, [evt.target.name]: evt.target.value })
    }
    const onSubmit = (evt) => {
        evt.preventDefault()
        setSearch({ ...search, city: search.searchTerm, searchTerm: "" })
    }
    return (
        <div className="content">
            <form onSubmit={onSubmit}>
                <label>
                    Type the U.S. city you want to search for the weather data here: <br></br>
                    <input type="text" name="searchTerm" placeholder='Type City Here' onChange={onChange} />
                </label>
                <br></br>
                <label>
                    Or select one of the major U.S. cities here: <br></br>
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
                <button>Search for a U.S. city</button>
            </form>
            {search.city && <Location search={search} setSearch={setSearch} />}
        </div>

    )
}
