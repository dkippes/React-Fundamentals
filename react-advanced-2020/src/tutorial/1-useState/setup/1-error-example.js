import React from 'react';

const ErrorExample = () => {
  let title = 'random title';
  const handleClick = () => {
    alert('ah')
  }
  return <React.Fragment>
    <h2>{title}</h2>
    <button type="button" className="btn" onClick={handleClick}>Change the title</button>
  </React.Fragment>
};

export default ErrorExample;
