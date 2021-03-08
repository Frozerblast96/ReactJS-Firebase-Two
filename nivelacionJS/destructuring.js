
//desestructuración

const Persona ={
    nombre:'Sebastian',
    edad:21,
    casado:false,
    hijo:{
        nombrehijo:'Nothing'
    }
}

const {nombre,edad} = Persona;
console.log(nombre);

const {nombrehijo} = Persona.hijo;
console.log(nombrehijo);
