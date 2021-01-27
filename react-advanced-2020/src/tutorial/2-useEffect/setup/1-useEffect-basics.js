import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter - array of dependacies

const UseEffectBasics = () => {
  const [value, setValue] = useState(0);

  //Se usa para sideEffects
  useEffect(()=>{
    console.log('use effect');

    if (value >= 1) {
      document.title = `Mensajes(${value})`;
    } else {
      document.title = `No hay Mensajes`;
    }
  }, [value]); //Si le pasamos el segundo parametro va a cambiar Solo si el value cambia

  //Si se mira el log, este corre 1 sola vez pero como en el array no esta el value a cambiar este no hace render
  useEffect(() => {
    console.log('hello world');
  }, [])

  console.log('render');

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>Mas mensajes</button>
      <button className="btn" onClick={() => setValue(value - 1)}>Menos Mensajes</button>
    </>
  )
};

export default UseEffectBasics;
