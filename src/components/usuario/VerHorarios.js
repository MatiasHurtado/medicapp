import React,{Fragment,useContext,useState} from 'react';
import MedicoContext from '../../context/medico/medicoContext';
import ClienteContext from '../../context/cliente/clienteContext';
import AuthContext from '../../context/autenticacion/authContext';
import toast, { Toaster } from 'react-hot-toast';
const VerHorario = ({}) => {
    //Obtener state de medico
    const medicoContext = useContext(MedicoContext)
    const {horariomedi,eliminarHora} = medicoContext;

    //Obtener state auth
    const authContext = useContext(AuthContext)
    const {cliente}= authContext

      //Obtener state de medico
      const clienteContext = useContext(ClienteContext)
      const {agregarHora,obtenerAgedaCliente} = clienteContext;
    

      const [activo,guardarActivo]= useState(true)

     

      
    const obtenerHora =hora=>{
      guardarActivo(false)
      
      eliminarHora(hora.id)

      hora.estado = true
      hora.cliente =cliente._id
      agregarHora(hora)
      
      toast.success(`Su Hora Para:  ${hora.medico.especialidad} ha sido asiganada para el ${hora.fecha}`)
      setTimeout(() => {
        obtenerAgedaCliente(cliente)
        guardarActivo(true)
      }, 2000);
     
   
    }
    return ( 
        <Fragment>
               <div className="producto hor">
          <h3>Horario Disponible</h3>
          <ul className="listados ">
            {horariomedi.length===0
            ?(<li className="listado"><p>No tiene Horarios Disponibles</p></li>)
            :horariomedi.map(hora => (
                <li className="listado">
                <div className="box sombra">
                <div>
                  <p><span>Hora: </span>{hora.fecha}</p>
                </div>
                 
                 
                  {activo? ( <button class="button is-primary is-small is-rounded"
                    onClick={()=>obtenerHora(hora)}
                  >Pedir Hora</button>):
                   <button className="button is-primary is-small is-rounded"disabled
                
                  >Pedir Hora</button>
                  }
                 
                  <Toaster/>
                </div>
              </li>
              ))
            }
              
          </ul>
        </div>
        </Fragment>
     );
}
 
export default VerHorario;