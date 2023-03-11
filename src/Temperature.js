import React, { useState } from "react";

export default function Temperature(props) {
  let [temp, setTemp] = useState(Math.round(props.temperature.temperature));
  function convertToFahrenheit(event) {
    event.preventDefault();
    let fahrenheit = Math.round((temp * 9) / 5 + 32);
    setTemp(fahrenheit);
  }
  function convertToCelsius() {
    setTemp(Math.round(props.temperature.temperature));
  }
  if (temp === Math.round(props.temperature.temperature)) {
    return (
      <div className="icon-text">
        <img
          src={props.temperature.iconUrl}
          alt={props.temperature.description}
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
          src={props.temperature.iconUrl}
          alt={props.temperature.description}
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
