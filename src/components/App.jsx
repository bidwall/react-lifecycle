import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log("constructor - call super (pass props if any) and set state");
  }
  
  componentWillMount() {
    console.log("componentWillMount - component WILL be rendered to the DOM");
  }

  render() {
    console.log("render - i'll show you!");

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/components/App.jsx</code> and save to reload.
        </p>
      </div>
    );
  }

  componentDidMount() {
    console.log("componentDidMount - component HAS been rendered to the DOM");
  }
  
}

export default App;
