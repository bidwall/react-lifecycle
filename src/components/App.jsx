import React, {Component} from 'react';
import Input from './input/Input';
import Display from './display/Display';
import logo from '../logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    
    this.state = {name: ''};
    this.handleInputChange = this.handleInputChange.bind(this);

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

  handleInputChange(input) {
    this.setState({name: input});
  }

  render() {
    console.log("render - i'll show you!");

    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>React Playground</h2>
        </div>
        <p className="App-intro">
          This application plays with different aspects of the React javascript library. Have a look in <code>src/components/App.jsx</code> for more information.
        </p>
        <p className="App-intro">
          Press <code>F12</code> to view logged lifecycle events in the console.
        </p>
        <Input 
          onInputChange={this.handleInputChange} />
        <Display 
          name={this.state.name} />
      </div>      
    );
  }

  componentDidMount() {
    console.log("componentDidMount - component HAS been rendered to the DOM");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount - invoked immediately before a component is unmounted and destroyed");
  }

  componentWillReceiveProps(nexpProps) {
    console.log("componentWillReceiveProps - invoked before a mounted component receives new props");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate - invoked immediately after updating occurs");
  }
  

}

export default App;
