import React, { Component } from 'react';
// import Table from './Table'
import LogTable from './components/LogTable'
// import logo from './logo.svg';
import './App.css';
import data from './data.json'

console.log(data)

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <a href='http://sharmaharsh.me/ment-nl'><div className="Nav-Logo">
          <img  src={require('./images/logo_beta.svg')} alt="MENT-NL"/>
          </div></a>
        </div>
        <p className="App-intro">
        </p>
      <LogTable data={data} />
      </div>
    );
  }
}

export default App;
