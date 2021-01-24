//Necesito react
import React from 'react';
//Importo esta funcionalidad que permite renderizar
import ReactDom from 'react-dom';

//CSS
import './index.css';

//Array de Books
import {books} from './books.js';

//Importacion del componente Book
import Book from './Book.js'

//Probando un archivo en otra carpeta
import {hola} from './testing/testing.js'
console.log(hola);

/*
REGLAS JSX:
  -return single element
  -div / section / article or Fragment
  -use camelCase for html attribute (onClick)
  -className instead of class
  -close every element (/>)
  -formatting
*/

// SETUP VARS

//Creando mi componente (se necesita capitalizar el nombre, es una funcion especial / se puede usar arrow function)
function BookList() {
  //De aca devuelve "html" - se llama en realidad "jsx"
  //Puedo usar -> React.createElement('h1', {}, 'hello world');
  //Puedo usar <React.Fragment></..> porque solo puedo retornar un solo elemento
  return (
    <section className="bookList">
      {books.map((book) => {
        //const {img, title, author} = book;
        return (
          <Book key={book.id} {...book}/>
        );
      })}
    </section>
  );
}



//Renderizo mi componente en index.html (se necesita cerrar el componente con tags "<Greeting><Greeting/>")
ReactDom.render(<BookList />, document.getElementById('root'));
