// Import the React library
import React from 'react';

// Import the semantic-ui components library
import { Message } from 'semantic-ui-react';

// Define and export a NotificationMessage class component for communicating that the website is currently under construction
export default class NotificationMessage extends React.Component {
    // Define the constructor function for creating an instance of the NotificationMessage class component
    constructor(props) {
        super(props);

        // Define a new NotificationMessage state variable and provide it with a visibility value
        this.state = {visible: true};
        
        // this.getNotificationMessage = this.getNotificationMessage.bind(this);
    }

    // Define a handler function for updating the visibility state of the message if it is dismissed
    handleDismiss = () => {
        this.setState({ visible: false })
    }
    
    // Render the NotificationMessage class component
    render() {
      // If the visibility state of the message is true, then display the message
        if (this.state.visible) {
          return (
            <Message
              onDismiss={this.handleDismiss}
              header='Welcome!'
              content='This site is currently under construction.'
              color='red'
            />
          )
        }  
    }  
}