// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Card, Icon, Image } from 'semantic-ui-react';

// Define and export a WeatherCard class component for the forecasted weather for a given day
export default class WeatherCard extends React.Component {
    // Define the constructor function for creating an instance of the WeatherCard class component
    constructor(props) {
        super(props);

        this.state = {};

        // this.getWeatherCard = this.getWeatherCard.bind(this);
    }
    
    // Render the WeatherCard class component
    render() {
        // Define the description of a weather forecast using data from OpenWeather API
        const description = this.props.forecast.temperature + " | " + this.props.forecast.wind + " | " + this.props.forecast.humidity;
        
        // Define the content that is displayed in the footer of a card
        const extra = (
            <a href='https://openweathermap.org/'>
                {/* <Icon name='user' /> */}
                Powered By OpenWeather API
            </a>
        )

        return (
            // Display the card
            <Card
                image={this.props.forecast.icon}
                header='Forecast'
                meta={this.props.forecast.date}
                description={description}
                extra={extra}
            />

            // <Card>
            //     <Image src={this.props.forecast.icon} wrapped ui={false} />
            //     <Card.Content>
            //         <Card.Header>Forecast</Card.Header>
            //         <Card.Meta>{this.props.forecast.date}</Card.Meta>
            //         <Card.Description>
            //         </Card.Description>
            //     </Card.Content>
            //     <Card.Content extra>
            //         <a>
            //             {/* <Icon name='user' /> */}
            //             Froecast Provided By OpenWeather API
            //         </a>
            //     </Card.Content>
            // </Card>
        )
    }  
}