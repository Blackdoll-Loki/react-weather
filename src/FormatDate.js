import React from "react";

export default function FormatDate(props) {
  let date = new Date(props.timestamp * 1000);
  let weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  let day = date.getDay();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  console.log(date);
  if (hours < 10) {
    hours = `0${hours}`;
  }
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return (
    <span>
      {weekDays[day]} {hours}:{minutes}
    </span>
  );
}
