import React,{useContext} from 'react';
import ClienteContext from '../../context/cliente/clienteContext';
const VerAgenda = () => {

    const clienteContext = useContext(ClienteContext)
    const {agenda} =clienteContext
    return ( 
        <div className="producto agen">
            <h3>Mi Agenda</h3>     
            <ul className="listados ">
            {agenda.length===0
            ?(<li className="listado"><p>No tiene Horas Asignadas</p></li>)
            :agenda.map(hora => (
                <li className="listado">
                <div className="box sombra">
                  <p>Tiene Una Hora Con : <span>{hora.medico} </span> De <span>{hora.especialidad} </span>Hora Para El: <span>{hora.Fecha} </span></p>
                </div>
              </li>
              ))
            }
              
          </ul>
        </div>
     );
}
export default VerAgenda;