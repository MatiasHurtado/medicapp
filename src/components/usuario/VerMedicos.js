import { Fragment,useContext} from "react";
import medicoContext from '../../context/medico/medicoContext';

import React from 'react';
const VerMedicos = () => {


    //Obtener state de medico
    const MedicoContext = useContext(medicoContext)
    const {medicos,verHorarioMedico} = MedicoContext;

    return ( 
        <Fragment>

       
        <div className="producto med">
          <h3>Medicos Disponible</h3>

          <ul className="listados">
          {medicos.map(medico => (
                <li className="listado ">
                <div class="box sombra">
                  <p><span>Nombre:</span> {medico.nombre} <span>Especialidad:</span> {medico.especialidad}</p>
                  <button class="button is-primary is-small is-rounded"
                    onClick={()=>verHorarioMedico(medico.id)}
                  >Ver Horarios</button>
                </div>
              </li>
              ))}
            </ul>        
         </div>
        </Fragment>
        
     );
}
 
export default VerMedicos;