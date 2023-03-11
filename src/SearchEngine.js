import React, { useState } from "react";
import Current from "./Current";
import "./SearchEngine.css";

export default function SearchEngine() {
  let [weather, setWeather] = useState({ ready: false });
  let [city, setCity] = useState("");
  function getCity(event) {
    setCity(event.target.value);
  }
  function storeWeather(response) {
    let arr = makeWeatherObj(response);
    setWeather(arr);
  }
  function makeWeatherObj(obj) {
    let weather = {
      ready: true,
      city: obj.city,
      description: obj.condition.description,
      iconUrl: obj.condition.icon_url,
      temperature: obj.temperature.current,
      humidity: obj.temperature.humidity,
      timestamp: obj.time,
      wind: obj.wind.speed,
    };
    return weather;
  }
  async function getWeather(event) {
    event.preventDefault();
    let apiKey = `be31ee9ff95t7734bo02a1e16b490b16`;
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    /*axios.get(url).then(storeWeather);*/
    fetch(url)
      .then((response) => response.json())
      .then((obj) => {
        console.log(obj);
        storeWeather(obj);
      });
  }
  if (weather.ready) {
    return (
      <div>
        <form onSubmit={getWeather}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={getCity}
          />
          <input type="button" className="search-btn" value="Submit" />
        </form>
        <Current weather={weather} />
      </div>
    );
  } else {
    return (
      <div>
        <form onSubmit={getWeather}>
          <input
            type="text"
            className="search-input"
            placeholder="Enter a city..."
            autoFocus="on"
            onChange={getCity}
          />
          <input type="button" className="search-btn" value="Submit" />
        </form>
      </div>
    );
  }
}
