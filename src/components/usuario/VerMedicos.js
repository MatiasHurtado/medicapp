import { Fragment,useContext} from "react";
import medicoContext from '../../context/medico/medicoContext';

import React from 'react';
const VerMedicos = () => {


    //Obtener state de medico
    const MedicoContext = useContext(medicoContext)
    const {medicos,verHorarioMedico,obtenerMedicos,obtenerAgendaDisponible} = MedicoContext;



    const ObtenerHras=(id)=>{
     
     
      
      obtenerAgendaDisponible(id,false)
    }
    

    

    return ( 
        <Fragment>

       
        <div className="producto med">
          <h3>Medicos Disponible</h3>

         


          {medicos.length === 0
          ?(
            <ul className="listados">
            <button className="button is-success is-medium"
              onClick={()=>obtenerMedicos()}
            >Ver Medicos </button>
            </ul>
          )
          :  
          <ul className="listados">
             {medicos.map(medico => (
                  <li className="listado ">
                  <div className="box sombra">
                    <p><span>Nombre:</span> {medico.nombre} <span>Especialidad:</span> {medico.especialidad}</p>
                    <button className="button is-primary is-small is-rounded"
                      onClick={()=>ObtenerHras(medico._id)}
                    >Ver Horarios</button>
                  </div>
                </li>
                ))}   
           </ul>  
          }
          
         

         
        

          
         
                
         </div>
        </Fragment>
        
     );
}
 
export default VerMedicos;