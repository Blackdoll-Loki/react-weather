import React, { useState } from "react";
import "./Forecast.css";

export default function Forecast(props) {
  console.log(props.forecast);
  function day(data) {
    let date = new Date(data.time * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = days[date.getDay()];
    return day;
  }
  if (props.forecast !== null) {
    return (
      <div className="ForecastCards">
        {props.forecast.map((el, idx) => {
          if (idx < 6)
            return (
              <div className="card" key={idx}>
                <h3>{day(el)}</h3>
                <img
                  src={el.condition.icon_url}
                  alt={el.condition.desription}
                />
                <p>
                  {Math.round(el.temperature.minimum)} &deg;{" "}
                  {Math.round(el.temperature.maximum)} &deg;
                </p>
              </div>
            );
        })}
      </div>
    );
  } else {
    return "Loading";
  }
}
