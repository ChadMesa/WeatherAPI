import React from "react";
import Inputs from "./components/Inputs";
import Weather from "./components/Weather";

const API_KEY = "9d319b46c9894df48f927747ad7ab90e";

class Main extends React.Component {
  state = {
    currentTemp: undefined,
    highest: undefined,
    lowest: undefined,
    humidity: undefined,
    condition: undefined,
    error: undefined,
    description: undefined
  }
  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const apiCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=imperial`);
    const data = await apiCall.json();
    console.log(data);
    if (city && country) {
      this.setState({
        currentTemp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: "",
        highest: data.main.temp_max,
        lowest: data.main.temp_min
      })
    } else {
      this.setState({
        currentTemp: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter a city and a country",
        highest: undefined,
        lowest: undefined
      });
    }
  }
  render() {
    return (
      <div className="container">
        <Inputs getWeather={this.getWeather} />
        <Weather
          currentTemp={this.state.currentTemp}
          city={this.state.city}
          country={this.state.country}
          humidity={this.state.humidity}
          description={this.state.description}
          error={this.state.error}
          highest={this.state.highest}
          lowest={this.state.lowest}
        />
      </div>
    );
  }
};

export default Main;