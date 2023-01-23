import './App.css';
import React, {useState} from 'react';
import Form from './components/Form';
import Weather from './components/Weather';

import { Routes, Navigate, Route, Link, Outlet} from "react-router-dom"



function App() {
  const [search, setSearch] = useState({city:"", searchTerm:"", displayLoc: "", lat: null, long: null})
  function RequireCity() {
  
    if (!search.city) {
  
      return <Navigate to="/weather-app" />;
    }
    return <Outlet />
  }
  

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather for {search.displayLoc.length ? search.displayLoc : "Any U.S. City!"}</h1>
        <Link style={{color: "white"}} id="home" to="/weather-app">Home</Link>
        <Link style={{color: "white"}} id="weather" to="/weather-app/weather">Weather For Current City</Link>
      </header>
      <Routes>
          <Route path="/weather-app" element={<Form search={search} setSearch={setSearch}/>} />
        <Route element={<RequireCity />}>
          <Route path="/weather-app/weather" element={<Weather search={search} />} />
        </Route>
      </Routes>
      <footer>
      Location data courtesy of Geocodify API Web Service (https://geocodify.com/) and weather data courtesy of Weather.gov API Web Service (https://www.weather.gov/documentation/services-web-api).
      </footer>
    </div>

  );
}

export default App;
