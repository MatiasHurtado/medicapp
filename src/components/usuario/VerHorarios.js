import React, { Fragment, useContext, useState } from "react";
import MedicoContext from "../../context/medico/medicoContext";
import ClienteContext from "../../context/cliente/clienteContext";
import AuthContext from "../../context/autenticacion/authContext";
import toast, { Toaster } from "react-hot-toast";
const VerHorario = () => {
  //Obtener state de medico
  const medicoContext = useContext(MedicoContext);
  const { horariomedi, eliminarHora } = medicoContext;

  //Obtener state auth
  const authContext = useContext(AuthContext);
  const { cliente } = authContext;

  //Obtener state de medico
  const clienteContext = useContext(ClienteContext);
  const { agregarHora, obtenerAgedaCliente } = clienteContext;

  const [activo, guardarActivo] = useState(true);

  const obtenerHora = (hora) => {
    guardarActivo(false);

    eliminarHora(hora.id);

    hora.estado = true;
    hora.cliente = cliente._id;
    agregarHora(hora);

    toast.success(
      `Su Hora Para:  ${hora.medico.especialidad} ha sido asiganada para el ${hora.fecha}`
    );
    setTimeout(() => {
      obtenerAgedaCliente(cliente);
      guardarActivo(true);
    }, 2000);
  };
  return (
    <Fragment>
      <div className="producto hor">
        <h3>Horario Disponible</h3>

        {horariomedi.length === 0 ? (
          <ul className="listados ">
            <li className="listado">
              <p>No tiene Horarios Disponibles</p>
            </li>
          </ul>
        ) : (
          <ul className="listados ">
            <table className="table">
              <thead> 
              <tr  className="is-selected">
                   <th>
                    <abbr title="Position">#</abbr>
                  </th>
                  <th>
                    <abbr title="Position">Fecha</abbr>
                  </th>
                  <th>
                    
                  </th>
                </tr>
              </thead>
              <tbody>
                {horariomedi.map((hora,i) => (
                  <tr>
                    <td>{i+=1}</td>
                    <td>{hora.fecha}</td>
                    <td>
                      {activo ? (
                        <button
                          className="button is-primary is-small "
                          onClick={() => obtenerHora(hora)}
                        >
                          Pedir Hora
                        </button>
                      ) : (
                        <button
                          className="button is-primary is-small "
                          disabled
                        >
                          Pedir Hora
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
              <Toaster />
            </table>
          </ul>
        )}
      </div>
    </Fragment>
  );
};

export default VerHorario;
