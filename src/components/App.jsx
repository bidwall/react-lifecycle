import React, {Component} from 'react';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    console.log("constructor - call super (pass props if any) and set state");
  }

  shouldComponentUpdate(nextProps, nextState) {
    //let React know if a component's output is not affected by the current change in state or props
    console.log("shouldComponentUpdate - invoked before rendering when new props or state are being received");
    //returning false does not prevent child components from re-rendering when their state changes
    return true;
  }
  
  componentWillMount() {
    console.log("componentWillMount - component WILL be rendered to the DOM");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate -  invoked immediately before rendering when new props or state are being received");
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



  componentWillReceiveProps(nexpProps) {
    console.log("componentWillReceiveProps - invoked before a mounted component receives new props");
  }

  

  componentDidUpdate() {
    console.log("componentDidUpdate - invoked immediately after updating occurs");
  }

}

export default App;
