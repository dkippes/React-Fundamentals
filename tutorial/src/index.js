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

// SETUP VARS
const firstBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL._AC_UL200_SR200,200_.jpg',
  title: '1984',
  author: 'George Orwell',
};

const secondBook = {
  img:
    'https://images-na.ssl-images-amazon.com/images/I/716zRCJKTFL._AC_UL200_SR200,200_.jpg',
  title: 'The Hill We Climb: An Inaugural Poem for the Country',
  author: 'Amanda Gorman',
};

//Creando mi componente (se necesita capitalizar el nombre, es una funcion especial / se puede usar arrow function)
function BookList() {
  //De aca devuelve "html" - se llama en realidad "jsx"
  //Puedo usar -> React.createElement('h1', {}, 'hello world');
  //Puedo usar <React.Fragment></..> porque solo puedo retornar un solo elemento
  return (
    <section className="bookList">
      <Book
        img={firstBook.img}
        title={firstBook.title}
        author={firstBook.author}
      >
        
      </Book>

      <Book
        img={secondBook.img}
        title={secondBook.title}
        author={secondBook.author}
      />
    </section>
  );
}

const Book = (props) => {
  const {img, title, author} = props;
  return (
    <article className="book">
      <img src={img} alt="" />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

//Renderizo mi componente en index.html (se necesita cerrar el componente con tags "<Greeting><Greeting/>")
ReactDom.render(<BookList />, document.getElementById('root'));
