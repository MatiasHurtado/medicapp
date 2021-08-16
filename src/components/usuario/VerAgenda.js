import React,{useContext} from 'react';
import ClienteContext from '../../context/cliente/clienteContext';
import AuthContext from '../../context/autenticacion/authContext';
const VerAgenda = () => {

    const clienteContext = useContext(ClienteContext)
    const {agenda,obtenerAgedaCliente} =clienteContext

    const authContext= useContext(AuthContext)
    const {cliente}= authContext




  
    return ( 
        <div className="producto agen">
            <h3>Mi Agenda</h3>     
            <ul className="listados ">
            {agenda.length===0
            ?
              <button className="button is-success is-medium"
              onClick={()=>obtenerAgedaCliente(cliente)}>Ver mi agenda </button>
           
            :agenda.map(hora => (
                <li className="listado">
                <div className="box sombra">
                  <div>
                    <label><span>Tiene Una Cita con: </span>{hora.medico.nombre}</label>
                    <label><span>Especialidad:</span> {hora.medico.especialidad} </label>
                    <label><span>Para el: </span> {hora.fecha}</label>
                  </div>
                  
                </div>
              </li>
              ))
            }
              
          </ul>
        </div>
     );
}
export default VerAgenda;