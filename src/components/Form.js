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
                <button>Search for a U.S. city</button>
            </form>
            {search.city && <Location search={search} setSearch={setSearch} />}
        </div>

    )
}
