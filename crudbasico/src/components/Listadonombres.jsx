import React,{useState} from 'react'
import uniqid from 'uniqid'

const Listadonombres = () => {

    const [nombre,setNombre] = useState('');
    const [listanombres,setListanombres] = useState([]);
    const [modoEdicion,setModoedicion] = useState(false);
    const [id,setId] =useState('');
    const [error,setError] = useState(null)

    const addNombre =(e)=>{
        e.preventDefault()
        if(!nombre.trim()){
            setError('el campo nombre esta vacio')
            return
        }
        const nuevoNombre ={
            id:uniqid(),
            tituloNombre:nombre

        }
        setListanombres([...listanombres,nuevoNombre])
        setNombre('')
        setError(null)
    }

    const deleteNombre =(id)=>{
        const nuevaArray = listanombres.filter(item => item.id !==id)
        setListanombres(nuevaArray)
    }

    const editar = (item) =>{
        setModoedicion(true)
        setNombre(item.tituloNombre)
        setId(item.id)
    }

    const editarNombre = (e) =>{
        e.preventDefault()
        const NuevoArray = 
        listanombres.map(item => item.id === id ? {id:id,tituloNombre:nombre}:item)
        setListanombres(NuevoArray)
        setModoedicion(false)
        setNombre('')
    }




    return (
        <div>
            <h2>Aplicación CRUD BASICA</h2>
            <div className="row">
                <div className="col">
                    <h2>Listado de nombres</h2>
                    <ul className="list-group">
                        {
                            listanombres.map(item=>
                                <li key="{item.id}" className="list-group-item">{item.tituloNombre}
                                <button onClick={()=>{deleteNombre(item.id)}} className="btn btn-danger float-right">
                                    Borrar
                                </button>
                                <button onClick={()=>{editar(item)}} className="btn btn-warning float-right">
                                    EDITAR
                                </button>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <div className="col">
                    <h2>Formulario para añadir nombres</h2>
                    <form 
                        onSubmit={modoEdicion? editarNombre:addNombre} 
                        className="form-group"
                    >
                        <input 
                            onChange={(e)=>{setNombre(e.target.value)}} 
                            className="form-control mb-3" 
                            type="text" 
                            placeholder="introduce el nombre" 
                            value={nombre}
                        />
                        <input 
                            className="btn btn-info btn-block" 
                            type="submit" 
                            value={modoEdicion ? 'Editar Nombre': 'Registrar Nombre'} 
                        />
                    </form>
                    {
                        error != null? (
                            <div className="alert alert-danger">
                                {error}
                            </div>
                        ):
                        (
                            <div></div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}
export default Listadonombres;
