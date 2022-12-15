// import logo from './logo.svg';
// import './App.css';

// Import the NotificationMessage class component
import NotificationMessage from './components/NotificationMessage';

// Import the HeaderMessage class component
import HeaderMessage from './components/HeaderMessage';

// Import the Dashboard page class component
import Dashboard from './pages/Dashboard';

// Define the App functional component
function App() {
  // Render the application
  return (
    <div>
      <NotificationMessage/>
      <HeaderMessage />
      <br/>
      <Dashboard />
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
