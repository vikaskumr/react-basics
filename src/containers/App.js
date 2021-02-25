import logo from '../../src/logo.svg';
import classes from './App.css';
import React, { Component } from 'react';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';
import Aux from '../hoc/Aux'


//class based components
class App extends Component {


  constructor(props) {
    super(props);
    console.log('constructed called');

  }

  //classes are state based components
  //state can't be changed and if it changed then it will rerender the component
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 }
    ]
  };


  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedState called');
    return state;
  }

  componentDidMount() {
    console.log('[App.js ] component did mount called');
  }

  componentWillUnmount() {
    console.log('run right before component is unmounted');
  }

  switchNameHander = (newName) => {

    /*don't directly mutate state like this 
    this.state.persons[0] = "Maxmilian";*/

    /* instead use this method to update state which will update the UI 
    override the original state  persons object */
    this.setState(
      {
        persons: [
          { name: newName, age: 28, key: 1 },
          { name: "Manuaaa", age: 26, key: 2 }
        ]
      }
    );
    console.log('was clicked!');
  };

  nameChangedHander = (event) => {

    //two way binding function
    this.setState(
      {
        persons: [
          { name: event.target.value, age: 28 },
          { name: event.target.value, age: 26 }
        ]
      }
    );
  };


  render() {
    console.log('[App.js render  called]');
    return (
      <Aux>
        <Cockpit
          nameHander={this.switchNameHander.bind(this, "Vikas!!")}>
        </Cockpit>
        <Persons
          persons={this.state.persons}
          changed={this.nameChangedHander}>
        </Persons>
      </Aux>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default WithClass(App, classes.App)
