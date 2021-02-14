import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import Person from './Person/Person';
import userEvent from '@testing-library/user-event';

//class based components
const App = props => {

  //useState gives 2 things in return 
  //1). Persons state object and function which will update the state
  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "Manu", age: 29 }
    ],
    otherState: 'Some other value'
  });

  const [otherState, setOtherState] = useState('some other value');

  const switchNameHander = () => {

    /*difference between functional and class states are 
    1). Functional component state will not merge the other state objects  
         with the existing state after updation.
    2). In Class components after state updation the previous state and state after updation is merged.
    3).useState({
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 }
      ],
      otherState: 'Some other value'
    });  

    setPersonsState(
      {
        persons: [
          { name: "Maxmilian", age: 28 },
          { name: "Manuaaa", age: 26 }
        ]
      }
    );
    output of setPersonsState(which is updating the state) will be 
    {
      persons: [
        { name: "Max", age: 28 },
        { name: "Manu", age: 29 }
      ]
    }

     otherState: 'Some other value' is gone now from this state 
     so this is the major difference between functional component state and classs components state

    */

    setPersonsState(
      {
        persons: [
          { name: "Maxmilian", age: 28 },
          { name: "Manuaaa", age: 26 }
        ]
      }
    );
    console.log('was clicked!');
  };


  return (
    <div className="App" >
      <h1> Hi I am a React app</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHander}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age} />
    </div>
  );

  // return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'Does this work now?'));

}


//  //classes are state based components
//   //state can't be changed and if it changed then it will rerender the component
//   state = {
//     persons: [
//       { name: "Max", age: 28 },
//       { name: "Manu", age: 29 }
//     ]
//   };



export default App;
