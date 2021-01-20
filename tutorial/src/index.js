//Necesito react
import React from 'react';

//Importo esta funcionalidad que permite renderizar
import ReactDom from 'react-dom';

//Creando mi componente (se necesita capitalizar el nombre, es una funcion especial / se puede usar arrow function)
function Greeting() {
  //De aca devuelve "html" - se llama en realidad "jsx"
  return <h4>this is Diego, and this is my first component</h4>;
}

//Renderizo mi componente en index.html (se necesita cerrar el componente con tags "<Greeting><Greeting/>")
ReactDom.render(<Greeting/>, document.getElementById('root'));