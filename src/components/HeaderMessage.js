// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Header, Segment } from 'semantic-ui-react';

// Define and export a HeaderMessage class component for displaying the webpage's title and description
export default class HeaderMessage extends React.Component {
    // Define the constructor function for creating an instance of the HeaderMessage class component
    constructor(props) {
        super(props);

        this.state = {};
        
        // this.getHeaderMessage = this.getHeaderMessage.bind(this);
    }

    // Render the HeaderMessage class component
    render() {
      return (
        <div>
          {/* Display the title as a header */}
          <Header as='h2' attached='top' textAlign='center' inverted>
            Weather and News Data Application
          </Header>
          {/* Display the description as a segment */}
          <Segment attached textAlign='center' inverted>
            Hello! Below, you can search for weather and news data for a particular region.
          </Segment>
        </div>
      )  
    } 
}