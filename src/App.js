import "./App.css";
import React, { useState } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [city, setCity] = useState("City Name...");
  const [temp, setTemp] = useState("City Temp...");
  const [state, setState] = useState("Sate...");
  const [country, setCountry] = useState("Country...");
  const [lat, setLat] = useState("Lattitude...");
  const [lon, setLon] = useState("Longitude...");
  const [condition, setCondition] = useState("Condition...");

  return (
    <div className="App">
      <div className="card">
        <input
          className="input"
          placeholder="Enter Place Name"
          onChange={(e) => setSearch(e.target.value)}
        />
        <h1 className="city">{city}</h1>
        <h1 className="state-country">
          {state},{country}
        </h1>
        <h1 className="cordinates">
          Lat:{lat} , Long:{lon}
        </h1>
        <h1 className="condition">{condition}</h1>
        <h1 className="temp">
          {temp}&nbsp;
          <sup>o</sup>C
        </h1>
        <button
          onClick={() => {
            fetch(
              `https://api.weatherapi.com/v1/current.json?key=8a0d2c34088e4018b4052603222301&q=${search}`
            )
              .then((res) => res.json())
              .then((data) => {
                setCity(data.location.name);
                setTemp(data.current.temp_c);
                setState(data.location.region);
                setCountry(data.location.country);
                setLat(data.location.lat);
                setLon(data.location.lon);
                setCondition(data.current.condition.text);
              });
          }}
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default App;
