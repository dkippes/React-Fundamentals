import React, { useState } from 'react';
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState('kippes');
  const firstValue = text || 'hello world';
  const secondValue = text && 'hello world';
  return <>

    {/* <h1>{firstValue}</h1>
    <h1>value : {secondValue}</h1> */}

    {/* {if(){console.log('ah')}} //Tiraria un error */} 
    <h1>Or: {text || 'diego'}</h1>
    <h2>And: {text && 'diego'}</h2>
  </>;
};

export default ShortCircuit;
