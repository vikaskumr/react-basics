import React from 'react';
import './Person.css';

const person = (props) => {
  //functional component started having states from react 16.8
  return (
    <div className="Person">
      <p onClick={props.click}>'I am a {props.name} and {props.age} age'</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  )
};

export default person;
