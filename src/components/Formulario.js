import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Error from './Error';
import shortid from 'shortid';



const Formulario = ({setGasto, setCreargasto}) => {
    const [nombre, setNombre] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [error, setError] = useState(false)

    // Cuando el usuario agrerga el gasto con el submit
    const handleSubmit =(e)=>{
        e.preventDefault();
        
        // Validar
        if(nombre.trim() === ''|| cantidad < 0 || isNaN(cantidad)){
            setError(true);
            return;
        }
        setError(false);

        // Construir el Gasto
        const gasto ={
            nombre,
            cantidad,
            id: shortid.generate()
            
        }
        
        
        // Pasar el gasto al componente principal
        setGasto(gasto)
        setCreargasto(true)

        // Resetear el form
        setNombre('')
        setCantidad(0)
    }

    return (
        <form
            onSubmit={ handleSubmit }
        >
            <h2>Agrega tus Gastos aquí</h2>
            
            {error && <Error msg="Error al introducir los datos"/>}
            
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombre }
                    onChange={ (e)=>setNombre(e.target.value) }
                />
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="Ej. 300"
                    value={cantidad }
                    onChange={ (e)=>setCantidad (parseInt(e.target.value)) }
                />
            </div>

            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar Gastos"
            />

        </form>
    )
}

Formulario.propTypes = {
    setGasto: PropTypes.func.isRequired,
    setCreargasto: PropTypes.func.isRequired
}

export default Formulario
