// Import the React library
import React from 'react';

// Define and export the Clock class component
export default class Clock extends React.Component {
    // Define the constructor function for creating an instance of the Clock class component
    constructor(props) {
      super(props);

      // Define a new date state variable to store the current date
      this.state = {date: new Date()};
    }
  
    // Update the date state variable every second once the Clock class component mounts
    componentDidMount() {
      this.timerID = setInterval(() => {this.setState({date: new Date()});}, 1000);
    }
  
    // Clear the interval timer once the Clock class component unmounts to avoid bugs and memory leaks
    componentWillUnmount() {
      clearInterval(this.timerID);
    }
  
    // Render the Clock class component
    render() {
      return (
          <div className="time"> <b>Date</b>: {this.state.date.toLocaleDateString()}, {this.state.date.toLocaleTimeString()}</div>
      );
    }
  }