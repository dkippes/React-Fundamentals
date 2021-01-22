//Necesito react
import React from 'react';
//Importo esta funcionalidad que permite renderizar
import ReactDom from 'react-dom';

//CSS
import './index.css';

/*
REGLAS JSX:
  -return single element
  -div / section / article or Fragment
  -use camelCase for html attribute (onClick)
  -className instead of class
  -close every element (/>)
  -formatting
*/

//Creando mi componente (se necesita capitalizar el nombre, es una funcion especial / se puede usar arrow function)
function BookList() {
  //De aca devuelve "html" - se llama en realidad "jsx"
  //Puedo usar -> React.createElement('h1', {}, 'hello world');
  //Puedo usar <React.Fragment></..> porque solo puedo retornar un solo elemento
  return (
    <section className='bookList'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image></Image>
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);

const Title = () => <h1>1984</h1>;
const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25' }}>
    George Orwell
  </h4>
);

//Renderizo mi componente en index.html (se necesita cerrar el componente con tags "<Greeting><Greeting/>")
ReactDom.render(<BookList />, document.getElementById('root'));
