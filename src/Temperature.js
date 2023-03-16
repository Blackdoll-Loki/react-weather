import React, { useState, useEffect } from "react";

export default function Temperature(props) {
  let [temp, setTemp] = useState(Math.round(props.weather.temperature));
  console.log(props);
  function convertToFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = Math.round((temp * 9) / 5 + 32);
    setTemp(fahrenheit);
  }
  function convertToCelsius() {
    setTemp(Math.round(props.weather.temperature));
  }
  useEffect(() => {
    setTemp(Math.round(props.weather.temperature));
  }, [props.weather.temperature]);
  if (temp === Math.round(props.weather.temperature)) {
    return (
      <div className="icon-text">
        <img
          src={props.weather.iconUrl}
          alt={props.weather.description}
          className="central-icon"
        />
        <span className="temperature">{temp}</span>
        <span>°C</span>|
        <a href="/" onClick={convertToFahrenheit}>
          °F
        </a>
      </div>
    );
  } else {
    return (
      <div className="icon-text">
        <img
          src={props.weather.iconUrl}
          alt={props.weather.description}
          className="central-icon"
        />
        <span className="temperature">{temp}</span>
        <a href="/" onClick={convertToCelsius}>
          °C
        </a>
        |<span>°F</span>
      </div>
    );
  }
}
