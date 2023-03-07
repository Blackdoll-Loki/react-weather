import React, { useState } from "react";
/*import axios from "axios";*/
import List from "./List";

export default function SearchEngine() {
  let [temperature, setTemperature] = useState(null);
  let [city, setCity] = useState("");
  function getCity(event) {
    setCity(event.target.value);
  }
  function storeWeather(response) {
    let arr = makeWeatherArr(response);
    setTemperature(arr);
  }
  function makeWeatherArr(obj) {
    let arr = [].concat(
      Math.round(obj.temperature.current),
      obj.condition.description,
      obj.temperature.humidity,
      obj.wind.speed,
      obj.condition.icon_url
    );
    return arr;
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
  if (temperature) {
    return (
      <div className="App">
        <form onSubmit={getWeather}>
          <input type="text" placeholder="Enter a city..." onChange={getCity} />
          <input type="button" value="Submit" />
        </form>
        <List temperature={temperature} />
      </div>
    );
  } else {
    return (
      <form onSubmit={getWeather} className="App">
        <input type="text" placeholder="Enter a city..." onChange={getCity} />
        <input type="button" value="Submit" />
      </form>
    );
  }
}
