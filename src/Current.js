import React from "react";
import FormatDate from "./FormatDate";
import Temperature from "./Temperature";
import "./Current.css";

/*export default function List(props) {
  return (
    <ul>
      {props.temperature.map(function (item, index) {
        if (index === 0) {
          return <li key={index}> Temperature: {item}°C </li>;
        } else if (index === 1) {
          return <li key={index}> Description: {item} </li>;
        } else if (index === 2) {
          return <li key={index}> Humidity: {item}% </li>;
        } else if (index === 3) {
          return <li key={index}> Wind: {item}km/h </li>;
        }
        return (
          <li key={index}>
            <img src={item} alt="icon" />
          </li>
        );
      })}
    </ul>
  );
}*/

export default function Current(props) {
  console.log(props);
  return (
    <div className="Current">
      <div className="left-col">
        <h1>{props.weather.city}</h1>
        <ul>
          <li>
            <FormatDate timestamp={props.weather.timestamp} />
          </li>
          <li>{props.weather.description}</li>
        </ul>
        <Temperature weather={props.weather} />
      </div>
      <div className="right-col">
        <h2>Weather</h2>
        <p>Humidity: {props.weather.humidity}%</p>
        <p>Wind: {Math.round(props.weather.wind)}km/h</p>
      </div>
    </div>
  );
}
