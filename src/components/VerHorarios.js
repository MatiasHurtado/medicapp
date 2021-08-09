import React,{Fragment} from 'react';
const VerHorario = ({horariomedi}) => {
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
                  <p>Fecha: {hora.Fecha} </p>
                  <button class="button is-primary is-small is-rounded">Pedir Hora</button>
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