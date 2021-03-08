import React from 'react'
import Bienvenida from './components/Bienvenida'
import Cards from './components/Cards';

const App = () => {
  return (
    <div>
      <h1>Propiedades de los componentes</h1>
      <hr/>
      <div className="row">
        <div className="col">
          <Cards 
            imagen="https://conceptodefinicion.de/wp-content/uploads/2020/11/naturaleza.jpg"
            titulo="Titulo Card 1"
            texto="Texto de la Card 1"
          />
        </div>

        <div className="col">
          <Cards 
            imagen="https://conceptodefinicion.de/wp-content/uploads/2020/11/naturaleza.jpg"
            titulo="Titulo Card 2"
            texto="Texto de la Card 2"
          />
        </div>

        <div className="col">
          <Cards 
            imagen="https://conceptodefinicion.de/wp-content/uploads/2020/11/naturaleza.jpg"
            titulo="Titulo Card 3"
            texto="Texto de la Card 3"
          />
        </div>
      </div>   
    </div>
  )
}
export default App;