import React from 'react';

const cockpit = (props) => {
  return (
    <div>
      <h1> Hi I am a React app</h1>
      <p>This is really working!</p>
      <button onClick={props.nameHander}>Switch Name</button>
    </div>
  );
}

export default cockpit;
