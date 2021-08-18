import React, { useContext, useEffect } from "react";

import VerHorario from "./VerHorarios";
import VerMedicos from "./VerMedicos";
import VerAgenda from "./VerAgenda";
import AuthContext from "../../context/autenticacion/authContext";

const VistaCliente = () => {
  //Obtener state de medico

  //Extraer la informacion de autenticacion
  const authContext = useContext(AuthContext);
  const { cliente, usuarioAutenticado, cerrarSesion } = authContext;

  useEffect(() => {
    usuarioAutenticado();
  }, []);
  //  const verhorario =(id) =>{
  //   const result = horarios.filter(horario => horario.idMedico === id);
  //   guardarHorarioMed(result)
  //   }

  return (
    <div className="Contenerdor sombra">
      <div className="cabecera">
        <div className="titulo sombra">
          {cliente ? <h1>Hola {cliente.nombre} </h1> : null}

          <button
            className="button is-danger is-small "
            onClick={() => cerrarSesion()}
          >
            CERRAR SESION
          </button>
        </div>
      </div>
      <div className="productos">
        <VerMedicos></VerMedicos>
        <VerHorario></VerHorario>

        <VerAgenda></VerAgenda>
      </div>
    </div>
  );
};

export default VistaCliente;
