import React from "react";

export default function List(props) {
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
}
