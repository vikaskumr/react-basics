import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import Person from './Person/Person';

//class based components
class App extends Component {

  //classes are state based components
  //state can't be changed and if it changed then it will rerender the component
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 }
    ]
  };

  switchNameHander = (newName) => {

    // console.log('Was clicked!');
    /*don't directly mutate state like this 
    this.state.persons[0] = "Maxmilian";*/

    /* instead use this method to update state which will update the UI 
    override the original state  persons object */
    this.setState(
      {
        persons: [
          { name: newName, age: 28 },
          { name: "Manuaaa", age: 26 }
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
    return (
      <div className="App" >
        <h1> Hi I am a React app</h1>
        <p>This is really working!</p>
        <button onClick={this.switchNameHander.bind(this, "Vikas!!")}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHander.bind(this, "Sumit")}
          changed={this.nameChangedHander} >
          My Hobies:  Racing
        </Person>

      </div>
    );

    // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
