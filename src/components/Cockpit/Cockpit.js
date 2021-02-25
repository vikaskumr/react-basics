import React, { useEffect } from 'react';

const Cockpit = (props) => {

  useEffect(() => {
    console.log('Cockpit.js useffect');
    //similar to component did updated method, component did mount
    // we can use it for http calls and evertything
    //second arguemnet can be used as a dependency on which you only to re render your component
    // [] - means it will run only at the time of render and after the component is unmounted
    // [] - arguements means it will update only if those props are changed 
    setTimeout(() => {
      alert('useEffect called');
    }, 1000)
  }, [props.persons]);


  return (
    <div>
      <h1> Hi I am a React app</h1>
      <p>This is really working!</p>
      <button onClick={props.nameHander}>Switch Name</button>
    </div>
  );
}

export default Cockpit;
