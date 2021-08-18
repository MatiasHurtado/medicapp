import { Fragment, useContext } from "react";
import medicoContext from "../../context/medico/medicoContext";

import React from "react";
const VerMedicos = () => {
  //Obtener state de medico
  const MedicoContext = useContext(medicoContext);
  const { medicos, obtenerMedicos, obtenerAgendaDisponible } = MedicoContext;

  const ObtenerHras = (id) => {
    obtenerAgendaDisponible(id, false);
  };

 
 
  return (
    <Fragment>
      <div className="producto med">
        <h3>Medicos Disponible</h3>

        {medicos.length === 0 ? (
          <ul className="listados">
            <button
              className="button is-success is-medium"
              onClick={() => obtenerMedicos()}
            >
              Ver Medicos{" "}
            </button>
          </ul>
        ) : (
          <ul className="listados">
          <table className="table">
         
            <thead>
              <tr className="is-selected ">
                <th><abbr title="Position">#</abbr></th>
                <th><abbr title="Position">Medico</abbr></th>
                <th><abbr title="Played">Especialidad</abbr></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              
              {medicos.map((medico,i) => (
                <tr>
                <td>{i+=1}</td>
                <td>{medico.nombre}</td>
                <td>{medico.especialidad}</td>
                <td><button className="button is-primary is-small "
                  onClick={()=>ObtenerHras(medico._id)}
                >Ver Horas</button></td>
                </tr>
              ))}
           
          
            </tbody>

          </table>
        </ul>


        
        )}
      </div>
    </Fragment>
  );
};

export default VerMedicos;
