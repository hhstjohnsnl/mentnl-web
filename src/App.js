import React, { Component } from 'react';
// import Table from './Table'
import LogTable from './components/LogTable'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          <h2>MentNL</h2>
        </div>
        <p className="App-intro">
        </p>
	<LogTable />
      </div>
    );
  }
}

export default App;
