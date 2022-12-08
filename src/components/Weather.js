import React, {useEffect, useState} from "react";
import axios from "axios";

export default function Weather(props){
    let {search} = props
    const [link, setLink] = useState("")
    const [forecast, setForecast] =useState("")
    useEffect(()=>{
        axios.get(`https://api.weather.gov/points/${search.lat},${search.long}`)
        .then(res=>{
            console.log(res.data)
            setLink(res.data.properties.forecast)
        })
        .catch(err=>console.log(err))
    },[])
    useEffect(()=>{
        axios.get(link)
        .then(res=>{
            setForecast(res.data.properties.periods)
        })
        .catch(err=>console.log(err))
    },[link])
    return(
        <div className="weather">
            {search.city ? null : <h2 style={{color: "red"}}>Please go back to Home and select a city.</h2>}
            {forecast.length !==0 && forecast.map(period=>{
                return(
                    <div className="period" key={period.number}>
                        <h3>Date: {period.startTime.split("T")[0]}</h3>
                        <h3>Period of Time: {period.name}</h3>
                        <h3>Temperature: {period.temperature} deg F</h3>
                        <h4>Forecast: {period.detailedForecast}</h4>
                    </div>
                )
            })}
        </div>
    )
}
