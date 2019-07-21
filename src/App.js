import React, {Component} from 'react';
//import ReactGA from 'react-ga';
import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <Sidebar/>
        </header>
      </div>
    );
  }
}

export default App;
