// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Message, Icon } from 'semantic-ui-react';

// Define and export a LoadingData class component for communicating that a component is loading
export default class LoadingData extends React.Component {
    // Define the constructor function for creating an instance of the LoadingData class component
    constructor(props) {
        super(props);

        this.state = {};
        
        // this.getLoadingData = this.getLoadingData.bind(this);
    }
    
    // Display the LoadingData class component
    render() {
          return (
            <Message icon color='black'>
                <Icon name='circle notched' loading />
                <Message.Content>
                    <Message.Header>Just One Second Please...</Message.Header>
                    We are fetching some marvelous content for you.
                </Message.Content>
            </Message>
        )
    }  
}