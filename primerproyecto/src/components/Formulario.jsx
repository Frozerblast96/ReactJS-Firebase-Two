import React,{useState} from 'react'

const Formulario = () => {

    const[nombre,setNombre] = useState('');
    const[edad,setEdad] = useState(''); 
    const Validar = (event)=>{
        event.preventDefault();
        console.log('btn pulsado')
        if(!nombre.trim()){
            console.log('El campo nombre esta vacio')
            return
        }
        if(!edad.trim()){
            console.log('El campo edad esta vacio')
            return
        }
    }       


    return (
        <div className="container">
            <form onSubmit={Validar}className="form-group">
                <input 
                 placeholder="introduce el nombre"
                 className="form-control mb-3" 
                 type="text"
                 onChange={(e)=>{setNombre(e.target.value)}}
                />

                <input 
                  placeholder="introduce la edad"
                  className="form-control mb-3"
                  type="text"
                  onChange={(e)=>{setEdad(e.target.value)}}
                />

                <input 
                 className="btn btn-info btn-block mb-3"
                 type="submit" 
                 />
            </form>
        </div>
    )
}
export default Formulario;