import { Fragment } from "react";
import React from 'react';
const VerMedicos = ({medicos,verhorario}) => {
    return ( 
        <Fragment>

       
        <div className="producto med">
          <h3>Medicos Disponible</h3>

          <ul className="listados">
          {medicos.map(medico => (
                <li className="listado">
                <div class="box sombra">
                  <p>Nombre: {medico.nombre} especialidad: {medico.especialidad}</p>
                  <button class="button is-primary is-small is-rounded"
                    onClick={()=>verhorario(medico.id)}
                  >Pedir Hora</button>
                </div>
              </li>
              ))}
            </ul>        
         </div>
        </Fragment>
        
     );
}
 
export default VerMedicos;