// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Card } from 'semantic-ui-react';

// Import the LoadingData class component
import LoadingData from './LoadingData';

// Import the WeatherCard class component
import WeatherCard from './WeatherCard';

// Import the OpenWeather API GET request logic
// import fetchWeatherData from '../logic/OpenWeather API';

// Define and export a WeatherGrid class component for the current WeatherGrid
export default class WeatherGrid extends React.Component {
    // Define the constructor function for creating an instance of the WeatherGrid class component
    constructor(props) {
        super(props);

        // Define a new WeatherGrid state variable and provide it with the loading, current city, and forecasts data
        this.state = {
            isLoading: true,
            city: "Toronto",
            currentForecast: {},
            firstDayForecast: {},
            secondDayForecast: {},
            thirdDayForecast: {},
            fourthDayForecast: {},
            fifthDayForecast: {},
            sixthDayForecast: {}
        };

        this.fetchWeatherData = this.fetchWeatherData.bind(this);
    }

    // Define a function for making a GET request to the OpenWeather API
    fetchWeatherData = () => {
        // OpenWeatherMap API-related information
        const apiKey = "3b64e855db6f550ac62900aed67b9ff5";
        // Test variable
        var city = this.state.city;

        // Define a currentWeatherData object to add to the weatherDataObject
        var currentWeatherData = {};
        
        // Define a firstDayWeatherForecastData object to add to the weatherDataObject
        var firstDayWeatherForecastData = {};
        
        // Define a secondDayWeatherForecastData object to add to the weatherDataObject
        var secondDayWeatherForecastData = {};

        // Define a thirdDayWeatherForecastData object to add to the weatherDataObject
        var thirdDayWeatherForecastData = {};

        // Define a fourthDayWeatherForecastData object to add to the weatherDataObject
        var fourthDayWeatherForecastData = {};

        // Define a fifthDayWeatherForecastData object to add to the weatherDataObject
        var fifthDayWeatherForecastData = {};

        // Define a sixthDayWeatherForecastData object to add to the weatherDataObject
        var sixthDayWeatherForecastData = {};

        // Define a weatherData object to return
        var weatherData = {
            "currentWeatherData": currentWeatherData,
            "firstDayWeatherForecastData": firstDayWeatherForecastData,
            "secondDayWeatherForecastData": secondDayWeatherForecastData,
            "thirdDayWeatherForecastData": thirdDayWeatherForecastData,
            "fourthDayWeatherForecastData": fourthDayWeatherForecastData,
            "fifthDayWeatherForecastData": fifthDayWeatherForecastData,
            "sixthDayWeatherForecastData": sixthDayWeatherForecastData
        };

        // Fetching the first batch of data from an OpenWeatherMap API endpoint for the current weather
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey)
        .then(response => response.json())
        .then(data => {
            // Determine the current date
            var date = new Date();

            // Save the current date and time
            currentWeatherData["date"] = "Date and Time" + ": " + date.toLocaleDateString() + ", " + date.toLocaleTimeString();

            // Save the selected city's current temperature
            currentWeatherData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.main.temp - 273.15);

            // Save the selected city's current wind speed
            currentWeatherData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.wind.speed;

            // Save the selected city's current humidity
            currentWeatherData["humidity"] = "Humidity %" + ": " + data.main.humidity;

            // Savre the longitude and latitude for the currently searched for city
            currentWeatherData["longitude"] = data.coord.lon;
            currentWeatherData["latitude"] = data.coord.lat;
        })
        .catch(error => {
            console.log(error);
        });

        // Fetching the second batch of data from an OpenWeatherMap API endpoint for the current weather
        // fetch("https://api.openweathermap.org/data/2.5/onecall?lat=" + currentWeatherData["currentLatitude"] + "&lon=" + currentWeatherData["currentLongitude"] + "&exclude=hourly,daily&appid=" + apiKey)
        // .then(response => response.json())
        // .then(data => {
        //     // Save the current UV Index
        //     currentWeatherData["UVIndex"] = "Current UV Index" + ": " + data.current.uvi;

        //     // Change the color of the UV Index
        //     // Low UV Index
        //     // if (data.current.uvi <= 3){
        //     //     currentUVIndex.classList.remove("yellow");
        //     //     currentUVIndex.classList.remove("red");
        //     //     currentUVIndex.classList.add("green");
        //     // }
        //     // Moderate UV Index
        //     // if ((data.current.uvi > 3) && (data.current.uvi <= 6)) {
        //     //     currentUVIndex.classList.remove("green");
        //     //     currentUVIndex.classList.remove("red");
        //     //     currentUVIndex.classList.add("yellow");
        //     // }
        //     // High UV Index
        //     // if (data.current.uvi > 6) {
        //     //     currentUVIndex.classList.remove("green");
        //     //     currentUVIndex.classList.remove("yellow");
        //     //     currentUVIndex.classList.add("red");
        //     // }
        // })
        // .catch(error => {
        //     console.log(error);
        // });

        // Fetching the third batch of data from an OpenWeatherMap API endpoint for the forecasted weather
        fetch("https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + apiKey)
        .then(response => response.json())
        .then(data => {
            // Save the current weather icon
            var iconValue = data.list[0].weather[0].icon;
            currentWeatherData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            
            // Save the first day's forecasted date
            firstDayWeatherForecastData["date"] = "Date and Time" + ": " + data.list[2].dt_txt + " (24-Hour Clock)";        
            // Save the first day's forecasted weather icon
            iconValue = data.list[2].weather[0].icon;
            firstDayWeatherForecastData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            // Save the first day's forecasted temperature
            firstDayWeatherForecastData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.list[2].main.temp - 273.15);
            // Save the first day's forecasted wind
            firstDayWeatherForecastData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.list[2].wind.speed;
            // Save the first day's forecasted humidity
            firstDayWeatherForecastData["humidity"] = "Humidity %" + ": " + data.list[2].main.humidity;

            // Save the second day's forecasted date
            secondDayWeatherForecastData["date"] = "Date and Time" + ": " + data.list[10].dt_txt + " (24-Hour Clock)";
            // Save the second day's forecasted weather icon
            iconValue = data.list[10].weather[0].icon;
            secondDayWeatherForecastData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            // Save the second day's forecasted temperature
            secondDayWeatherForecastData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.list[10].main.temp - 273.15);
            // Save the second day's forecasted wind
            secondDayWeatherForecastData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.list[10].wind.speed;
            // Save the second day's forecasted humidity
            secondDayWeatherForecastData["humidity"] = "Humidity %" + ": " + data.list[10].main.humidity;

            // Save the third day's forecasted date
            thirdDayWeatherForecastData["date"] = "Date and Time" + ": " + data.list[18].dt_txt + " (24-Hour Clock)";
            // Save the third day's forecasted weather icon
            iconValue = data.list[18].weather[0].icon;
            thirdDayWeatherForecastData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            // Save the third day's forecasted temperature
            thirdDayWeatherForecastData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.list[18].main.temp - 273.15);
            // Save the third day's forecasted wind
            thirdDayWeatherForecastData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.list[18].wind.speed;
            // Save the third day's forecasted humidity
            thirdDayWeatherForecastData["humidity"] = "Humidity %" + ": " + data.list[18].main.humidity;

            // Save the fourth day's forecasted date
            fourthDayWeatherForecastData["date"] = "Date and Time" + ": " + data.list[26].dt_txt + " (24-Hour Clock)";
            // Save the forth day's forecasted weather icon
            iconValue = data.list[26].weather[0].icon;
            fourthDayWeatherForecastData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            // Save the forth day's forecasted temperature
            fourthDayWeatherForecastData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.list[26].main.temp - 273.15);
            // Save the forth day's forecasted wind
            fourthDayWeatherForecastData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.list[26].wind.speed;
            // Save the forth day's forecasted humidity
            fourthDayWeatherForecastData["humidity"] = "Humidity %" + ": " + data.list[26].main.humidity;

            // Save the fifth day's forecasted date
            fifthDayWeatherForecastData["date"] = "Date and Time" + ": " + data.list[34].dt_txt + " (24-Hour Clock)";
            // Save the fifth day's forecasted weather icon
            iconValue = data.list[34].weather[0].icon;
            fifthDayWeatherForecastData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            // Save the fifth day's forecasted temperature
            fifthDayWeatherForecastData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.list[34].main.temp - 273.15);
            // Save the fifth day's forecasted wind
            fifthDayWeatherForecastData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.list[34].wind.speed;
            // Save the fifth day's forecasted humidity
            fifthDayWeatherForecastData["humidity"] = "Humidity %" + ": " + data.list[34].main.humidity;

            // Save the sixth day's forecasted date
            sixthDayWeatherForecastData["date"] = "Date and Time" + ": " + data.list[39].dt_txt + " (24-Hour Clock)";
            // Save the sixth day's forecasted weather icon
            iconValue = data.list[39].weather[0].icon;
            sixthDayWeatherForecastData["icon"] = "http://openweathermap.org/img/wn/" + iconValue + "@2x.png";
            // Save the sixth day's forecasted temperature
            sixthDayWeatherForecastData["temperature"] = "Temperature in Degrees Celsius" + ": " + Math.round(data.list[39].main.temp - 273.15);
            // Save the sixth day's forecasted wind
            sixthDayWeatherForecastData["wind"] = "Wind Speed in Metres Per Second" + ": " + data.list[39].wind.speed;
            // Save the sixth day's forecasted humidity
            sixthDayWeatherForecastData["humidity"] = "Humidity %" + ": " + data.list[39].main.humidity;

            // Update the state variables with the retrieved weather data
            this.setState({
                isLoading: false,
                currentForecast: currentWeatherData,
                firstDayForecast: firstDayWeatherForecastData,
                secondDayForecast: secondDayWeatherForecastData,
                thirdDayForecast: thirdDayWeatherForecastData,
                fourthDayForecast: fourthDayWeatherForecastData,
                fifthDayForecast: fifthDayWeatherForecastData,
                sixthDayForecast: sixthDayWeatherForecastData
            })
        })
        .catch(error => {
            console.log(error);
        });

        // Log the retrieved weather data to the DevTools console
        console.log("Retrieved Weather Data: ", weatherData);
    }

    // Make a GET request to the OpenWeather API service to retrieve current weather and forecast data
    componentDidMount() {
        this.fetchWeatherData();
    }

    // Render the WeatherGrid class component
    render() {
        // If the OpenWeather API GET request is still processing, display the LoadingData class component; otherwise, display the populated WeatherCard class components
        if (this.state.isLoading){
            return (<LoadingData />)
        }
        else {
            return (
                <Card.Group itemsPerRow={3}>
                    <WeatherCard forecast={this.state.currentForecast}/>
                    <WeatherCard forecast={this.state.firstDayForecast}/>
                    <WeatherCard forecast={this.state.secondDayForecast}/>
                    <WeatherCard forecast={this.state.thirdDayForecast}/>
                    <WeatherCard forecast={this.state.fourthDayForecast}/>
                    <WeatherCard forecast={this.state.fifthDayForecast}/>
                    <WeatherCard forecast={this.state.sixthDayForecast}/>
                </Card.Group>
            )
        }  
    }  
}