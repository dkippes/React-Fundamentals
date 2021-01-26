import React, { useState } from 'react';
//useState es una funcion
//component name must be uppercase
// must be in the function/component body
// cannot call conditionally


const UseStateBasics = () => {
  //console.log(useState(['hola']));
  //const value = useState(1)[0]
  //const handler = useState(1)[1]
  //console.log(value, handler);
  const [text, setText] = useState('random title')
  const handleClick = () => {
    if(text === 'random title') {
      setText('hola mundo');
    } else {
      setText('random title')
    }
  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button type="button" className="btn" onClick={handleClick}>Change Title</button>
    </React.Fragment>
  )
};

export default UseStateBasics;
