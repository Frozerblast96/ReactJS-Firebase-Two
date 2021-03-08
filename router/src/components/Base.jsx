import React,{useState,useEffect} from 'react'

const Base = () => {
    const [nombre,setNombre] = useState('Sebastian');
    useEffect(() => {
       setTimeout(()=>{
           setNombre('Anastasia')
       },2000)
    })

    return (
        <div>
            <h1>Pagina Ruta Base /</h1>
            {nombre}
        </div>
    )
}

export default Base
