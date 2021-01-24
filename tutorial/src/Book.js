import React from 'react'

const Book = ({ img, title, author }) => {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (e) => {
    console.log(e.target);
    alert('hola');
  };
  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <h1
        onClick={() => {
          alert(title);
        }}
      >
        {title}
      </h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        More complex example
      </button>
    </article>
  );
};

//Solo uno puede exportarse como default en este file
export default Book
