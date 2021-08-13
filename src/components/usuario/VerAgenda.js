import React,{useContext} from 'react';
import ClienteContext from '../../context/cliente/clienteContext';
const VerAgenda = () => {

    const clienteContext = useContext(ClienteContext)
    const {agenda,obtenerAgedaCliente} =clienteContext




    const ObtenerAgenda = () =>{

    }

    return ( 
        <div className="producto agen">
            <h3>Mi Agenda</h3>     
            <ul className="listados ">
            {agenda.length===0
            ?
              <button className="button is-success is-medium"
              onClick={()=>obtenerAgedaCliente()}>Ver mi agenda </button>
           
            :agenda.map(hora => (
                <li className="listado">
                <div className="box sombra">
                  <p>Tiene Una Hora Con : <span>{hora.medico.nombre} </span> De <span>{hora.medico.especialidad} </span>Hora Para El: <span>{hora.fecha} </span></p>
                </div>
              </li>
              ))
            }
              
          </ul>
        </div>
     );
}
export default VerAgenda;