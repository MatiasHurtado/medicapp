import React,{Fragment,useContext} from 'react';
import MedicoContext from '../../context/medico/medicoContext';
import ClienteContext from '../../context/cliente/clienteContext';
import toast, { Toaster } from 'react-hot-toast';
const VerHorario = ({}) => {
    //Obtener state de medico
    const medicoContext = useContext(MedicoContext)
    const {horariomedi,eliminarHora,verHorarioMedico} = medicoContext;

      //Obtener state de medico
      const clienteContext = useContext(ClienteContext)
      const {agregarHora} = clienteContext;
    

      //Notificaciones
      const notify = () => toast('Here is your toast.');

      
    const obtenerHora =hora=>{
      verHorarioMedico(hora.idMedico)
      agregarHora(hora)
      eliminarHora(hora.id)
      toast.success(`su hora para ${hora.especialidad} ha sido asiganada para el ${hora.Fecha}`)
      
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
                <div class="box sombra">
                  <p><span>Fecha:</span> {hora.Fecha} </p>
                 
                  <button class="button is-primary is-small is-rounded"
                    onClick={()=>obtenerHora(hora)}
                  >Pedir Hora</button>
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