import React, { useEffect, useRef } from 'react';

// It works like useState
// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {

  const refContainer = useRef(null);
  const divContainer = useRef(null);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  }

  useEffect(() => {
    console.log(refContainer.current);
    refContainer.current.focus();
  });
  
  return (
    <>
      <form className="form" onClick={handleSubmit}>
        <div>
          <input type="text" ref={refContainer} />
          <button type="submit">Submit</button>
        </div>
      </form>
      <div ref={divContainer}>Hell World</div>
    </>
  );
};

export default UseRefBasics;
