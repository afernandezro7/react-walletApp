import React, { useState } from 'react'
import Error from './Error';
import PropTypes from 'prop-types'


const Pregunta = ({setPresupuesto, setRestante, setMostrarpregunta}) => {

    // Definir State
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    // Función Leer presupuesto
    const handleChange = ({target})=>{
        const inputValue = parseInt(target.value, 10);
        setCantidad(inputValue)
    }

    //Manejar submit agregar Presupuesto
    const handleSubmit= (e)=>{
        e.preventDefault();
        
        //Validar
        if(isNaN(cantidad) || cantidad < 1 ){
            setError(true)
            return;
        }

        // si pasa validacion
        setError(false)
        // Agregar Presupuesto
        setPresupuesto(cantidad)
        setRestante(cantidad)
        setMostrarpregunta(false)
    }


    return (
        <>
            <h2>Coloca tu Presupuesto</h2>
            {error && <Error msg="El Presupuesto es Incorrecto"/>}

            <form
                onSubmit={ handleSubmit }
            >
                <input
                    type="number"
                    name="presupuesto"
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={ handleChange }
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </>
    )
}

Pregunta.propTypes = {
    setPresupuesto: PropTypes.func.isRequired,
    setRestante: PropTypes.func.isRequired,
    setMostrarpregunta: PropTypes.func.isRequired
}

export default Pregunta
