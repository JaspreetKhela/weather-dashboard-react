// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Button, Divider, Grid, Header, Icon, Form, Input, Segment } from 'semantic-ui-react';

// Define and export a WeatherForm class component for the otaining a city input value to search for and to provide a link to TheWeatherNetwork.ca
export default class WeatherForm extends React.Component {
    // Define the constructor function for creating an instance of the WeatherForm class component
    constructor(props) {
        super(props);

        // Define a new WeatherForm state variable and provide it with the a default city value
        this.state = {query: "Toronto"};
        
        // this.getWeatherForm = this.getWeatherForm.bind(this);
    }

    // Define a handler function for updating the current chosen city value
    handleFormSubmit = () => {
        // console.log('City Search:', this.state.query);
        var city = this.state.query;
        // Return the new city value to the WeatherGrid component so that a new OpenWeather API call can be made
        this.props.onCitySearch(city);
    }
    
    // Define a handler function for updating the query state variable
    handleInputChange = (e) => {
        this.setState({
            query: e.target.value
        });
    }
    
    // Render the WeatherForm class component
    render() {        
        return (
            <Segment placeholder>
                {/* Display a grid with two columns, one for the form and one for the hyperlink */}
                <Grid columns={2} stackable textAlign='center'>

                <Divider vertical inverted>OR</Divider>

                <Grid.Row verticalAlign='middle'>
                    {/* Display a column that contains the city search form */}
                    <Grid.Column color='black'>
                        <Header icon inverted>
                            <Icon name='search' />
                            Find City
                        </Header>

                        <Form onSubmit={this.handleFormSubmit}>
                            <Form.Input  placeholder='Search...' value={this.state.query} onChange={this.handleInputChange} />
                        </Form>
                        {/* <Search placeholder='Search countries...' onSubmit={this.onCitySearchSubmit}/> */}
                    </Grid.Column>

                    {/* Display a column that contains the hyperlink content */}
                    <Grid.Column color='black'>
                        <Header icon inverted>
                            <Icon name='world' />
                            Visit TheWeatherNetwork.ca
                        </Header>
                        <Button primary href='https://www.theweathernetwork.com/ca'>Visit</Button>
                    </Grid.Column>
                </Grid.Row>
                </Grid>
            </Segment>
        )
    }  
}