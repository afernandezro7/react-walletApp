import React, { useEffect, useState } from 'react';
import ControlPresupuesto from './components/ControlPresupuesto';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import Pregunta from './components/Pregunta';



function App() {
  
  //definir state de presupuesto global
  const [presupuesto, setPresupuesto] = useState(0);
  
  //definir state de restante del presupuesto global
  const [restante, setRestante] = useState(0)

  // mostrar componentes condicionales
  const [mostrarpregunta, setMostrarpregunta] = useState(true)

  // Definir States del Areeglo de Gastos
  const [gastos, setGastos] = useState([])

  //Cuando agreguemos un nuevo gasto 
  const [gasto, setGasto] = useState({})
  const [creargasto, setCreargasto] = useState(false)


  

  // useEffect actualiza el presupuesto restante cada vez que gastos cambia
  useEffect(() => {

    if(creargasto){

      // agrega el nuevo prsupuesto
      setGastos([
      
        ...gastos,
        gasto
      ]); 

      // resta del presupuesto actual
      const presupuestoRestante = restante - gasto.cantidad;
      setRestante(presupuestoRestante)

      //Resetear a false
      setCreargasto(false)
      
    }

    

  },[gasto,creargasto,gastos,restante])

 

  return (
    <div className="container">
      <header>
        <h1>Presupuesto Semanal</h1>

        <div className="contenido-principal contenuido">
          {

            mostrarpregunta
              ?
                (<Pregunta 
                  setPresupuesto={setPresupuesto}
                  setRestante={setRestante}
                  setMostrarpregunta={setMostrarpregunta}
                />)
              :
                (<div className="row">
                  <div className="one-half column">
                    <Formulario 
                      setGasto = {setGasto}
                      setCreargasto = {setCreargasto}
                    />
                  </div>
                  <div className="one-half column">
                    <Listado 
                      gastos={gastos}

                    />
                    <ControlPresupuesto 
                      presupuesto={presupuesto}
                      restante={restante}
                    />
                  </div>
                </div>)
          }
          

        </div>
      </header>

    </div>
    
  );
}

export default App;
