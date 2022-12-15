// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Grid, Segment, Menu } from 'semantic-ui-react';

// Import the Clock class component
import Clock from '../components/Clock';

// Import the WeatherForm class component
import WeatherForm from '../components/WeatherForm';

// Import the WeatherCard class component
import WeatherGrid from '../components/WeatherGrid';

// Import the AG Grid library
import {AgGridReact} from 'ag-grid-react';

// Import the AG Grid stylesheets
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

// Define and export a Dashboard class component for the current Dashboard
export default class Dashboard extends React.Component{
    // Define the constructor function for creating an instance of the Dashboard class component
    constructor(props) {
        super(props);
        // Define a new Dashboard state variable and provide it with default city and news headlines data
        this.state = { 
            city: "Toronto",
            rowData: [],
            columnDefs: [
                {field: "author", sortable: true, filter: true, resizable: true},
                {field: "content", sortable: true, filter: true, resizable: true},
                {field: "description", sortable: true, filter: true, resizable: true},
                {field: "publishedAt", sortable: true, filter: true, resizable: true},
                {field: "source", sortable: true, filter: true, resizable: true},
                {field: "title", sortable: true, filter: true, resizable: true},
                {field: "url", sortable: true, filter: true, resizable: true},
                {field: "urlToImage", sortable: true, filter: true, resizable: true}
            ]
            // rowData: [
            //     {News: "Crypto Crash", Description: "Collapse of the crypto market results in the loss of billions of dollars", Date: "12/11/22"},
            //     {News: "World Cup", Description: "France and Argentina will face off in the World Cup finals", Date: "14/11/22"},
            //     {News: "Snow Storm", Description: "There is a major snow storm expected to hit eastern parts of North America tonight", Date: "15/11/22"}
            // ],
            // columnDefs: [
            //     {field: "News", sortable: true, filter: true},
            //     {field: "Description", sortable: true, filter: true},
            //     {field: "Date", sortable: true, filter: true}
            // ]
        };
            
            this.fetchNewsData = this.fetchNewsData.bind(this);
    }

    // Define a handler function for the menu item clicks
    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    // Define a function to obtain the value from the city search form
    onCitySearchSubmit = (citySearch) => {
        console.log("City Search: ", citySearch);
        this.setState({ city: citySearch});
    }

    // Define a function for making a GET request to the NewsAPI
    fetchNewsData = () => {
        const apiKey = "4d7056c8fbb54248b82410771ed4ddd5";
        const getRequest = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
        
        fetch(getRequest)
        .then(response => response.json())
        .then(data => {
            console.log("NewsAPI Data: ", data.articles);
            this.setState({rowData: data.articles});
        })
        .catch(error => {
            console.log(error);
        });
    }

    // Make a GET request to the NewsAPI service to retrieve news headlines data
    componentDidMount() {
        this.fetchNewsData();
    }

    // Render the Dashboard class component
    render() {
        // Define a variable to store the current active menu item
        const { activeItem } = this.state

        // const defaultColDef = useMemo(() => ({
        //     softable: true,
        //     filter: true
        // }), []);

        return (
            <div>
                {/* Display a grid that contains all of the dashboard's content */}
                <Grid columns={2} divided textAlign='center'>
                    {/* Display the first row of the grid, which contains the Menu, Weather Form, and Weather Forecast segments */}
                    <Grid.Row stretched>
                        {/* Display the Menu column's content */}
                        <Grid.Column width={3} color='violet'>
                            <h2>Menu</h2>
                            {/* Display the current date and time */}                            
                            <Clock />

                            {/* Display the Menu */}
                            <Menu vertical inverted>
                                {/* Display a Menu category for the Weather Data */}
                                <Menu.Item>
                                    {/* Display a header for the Weather Data Menu options */}
                                    <Menu.Header>Weather Data</Menu.Header>
                                    
                                    {/* Display menu items for the Weather Data */}
                                    <Menu.Menu>
                                        <Menu.Item
                                        name='Long-Term Forecast'
                                        active={activeItem === 'long-term-forecast'}
                                        onClick={this.handleItemClick}
                                        />
                                        
                                        <Menu.Item
                                        name='Historical Data'
                                        active={activeItem === 'historical-weather-data'}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu>
                                </Menu.Item>

                                {/* Display a Menu category for the News Data */}
                                <Menu.Item>
                                    {/* Display a header for the News Data Menu options */}
                                    <Menu.Header>News Data</Menu.Header>

                                    {/* Display menu items for the News Data */}
                                    <Menu.Menu>
                                        <Menu.Item
                                        name='Trending'
                                        active={activeItem === 'trending'}
                                        onClick={this.handleItemClick}
                                        />

                                        <Menu.Item
                                        name='Historical Data'
                                        active={activeItem === 'historical-news-data'}
                                        onClick={this.handleItemClick}
                                        />

                                        <Menu.Item
                                        name='Saved'
                                        active={activeItem === 'saved-news'}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu>
                                </Menu.Item>

                                {/* Display a Menu category for the user's Profile */}
                                <Menu.Item>
                                    {/* Display a header for the Profile Menu options */}
                                    <Menu.Header>Profile</Menu.Header>

                                    {/* Display menu items for the user's Profile */}
                                    <Menu.Menu>
                                        <Menu.Item
                                        name='Settings'
                                        active={activeItem === 'settings'}
                                        onClick={this.handleItemClick}
                                        />

                                        <Menu.Item
                                        name='Billing'
                                        active={activeItem === 'dedicated'}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu>
                                </Menu.Item>

                                {/* Display a Menu category for the Support */}
                                <Menu.Item>
                                    {/* Display a header for the Support Menu options */}
                                    <Menu.Header>Support</Menu.Header>

                                    {/* Display menu items for the Support */}
                                    <Menu.Menu>
                                        <Menu.Item
                                        name='E-mail'
                                        active={activeItem === 'email'}
                                        onClick={this.handleItemClick}
                                        />

                                        <Menu.Item
                                        name='FAQs'
                                        active={activeItem === 'faq'}
                                        onClick={this.handleItemClick}
                                        />
                                    </Menu.Menu>
                                </Menu.Item>
                            </Menu>
                        </Grid.Column>

                        {/* Display the Weather Form and Weather Forecast content */}
                        <Grid.Column width={12} color='violet'>
                            {/* Weather Form's content */}
                            <h2>Weather Form</h2>
                            <WeatherForm onCitySearch={this.onCitySearchSubmit}/>
                            
                            {/* Weather Forecast's content */}
                            <h2>Weather Forecast</h2>
                            <WeatherGrid city={this.state.city}/>                                                                
                        </Grid.Column>
                    </Grid.Row>

                    {/* Display the second row of the grid, which contains the Top News Headlines segment */}
                    <Grid.Row>
                        {/* Display the Top News Headlines content */}
                        <Grid.Column width={15} color='violet'>
                            {/* Display the Top News Headlines content */}
                            <h2>Top News Headlines</h2>
                            <div className='ag-theme-alpine-dark' style={{height: 500}}>
                                {/* Display a table with news data */}
                                <AgGridReact 
                                    rowData={this.state.rowData} 
                                    columnDefs={this.state.columnDefs} 
                                    rowSelection='multiple' 
                                    animateRows={true}/>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>                
            </div>
        )
    }
}