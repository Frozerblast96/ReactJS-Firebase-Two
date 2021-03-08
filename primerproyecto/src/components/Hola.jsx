import React,{Fragment} from 'react';

function Hola() {
    let saludo = 'variable saludo'
    return (
      <Fragment>
        <h2>componente {saludo}</h2>
        <p>parrafo</p>
      </Fragment>
    );
  }
  
  export default Hola;