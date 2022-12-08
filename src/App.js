import './App.css';
import React, {useState} from 'react';
import Location from './components/Location';
import Form from './components/Form';
import Weather from './components/Weather';

import {Router, Routes, Route, Link} from "react-router-dom"

function App() {
  const [search, setSearch] = useState({city:"", searchTerm:"", display: "", lat: null, long: null})


  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather for {search.display ? search.display : "Any U.S. City!"}</h1>
        <Link style={{color: "white"}} id="home" to="/">Home</Link>
        <Link style={{color: "white"}} id="weather" to="/weather">Weather For Current City</Link>
      </header>
      <Routes>
          <Route path="/" element={<Form search={search} setSearch={setSearch}/>} />
          <Route path="/weather" element={<Weather search={search} />} />

      </Routes>

    </div>

  );
}

export default App;
