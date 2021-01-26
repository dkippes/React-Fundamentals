import React, { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'diego', 
    age: 24, 
    message: 'hola soy un mensaje'
  });

  /* 
  DE ESTA FORMA NO ESTAMOS USANDO OBJETOS
  const [name, setName] = useState('diego')
  const [age, setAge] = useState(24);
  const [message, setMessage] = useState('este'); */


  const changeMessage = () => {
    setPerson({...person, message: 'Este es un nuevo mensaje'}); //Al usar spread operator no borramos la persona y cambiamos el msg
  };
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className="btn" onClick={changeMessage}>Change Message</button>
    </>
  );
};

export default UseStateObject;
