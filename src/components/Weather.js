import React from "react";

const Weather = (props) => (
    <div>
        <div clasName="well">
            <h3>{props.city === undefined && props.country === undefined ? "" : props.city + ", " + props.country}</h3>
            <h4>{props.description ? "Condition: " + props.description : ""}</h4>
            <h4>{props.currentTemp ? "Current temperature: " + props.currentTemp : ""}</h4>
            <h4>{props.humidity === undefined ? "" : "Humidity: " + props.humidity + "%"}</h4>
            <h4>{props.highest && props.lowest ? "Highest/Lowest: " + props.highest + "/" + props.lowest : ""}</h4>
            {props.error ? props.error : ""}
        </div>
    </div>
)

export default Weather;