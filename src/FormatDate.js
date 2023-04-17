import React from "react";

export default function FormatDate(props){
    console.log(props.date)
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ];
      let day = days[props.date.getDay()];
      let hour = props.date.getHours();
      let minutes = props.date.getMinutes();

      if (hour < 10){
        hour = `0${hour}`
      }
      if (minutes < 10){
        minutes = `0${minutes}`
      }
    return (
        <div className="d-flex m-1 p-1 textFont" id="currentDateTime">
          {day} {hour}:{minutes}
        </div>
    )
}