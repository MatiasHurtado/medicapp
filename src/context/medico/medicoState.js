import React, { useReducer } from "react";
import {
  ELIMINAR_HORA,
  REINICIAR_HORARIOS,
  OBTENER_MEDICOS,
  OBTENER_AGENDAS_LIBRES,
} from "../../types/index";
import medicoReducer from "./medicoReducer";
import medicoContext from "./medicoContext";
import clienteAxios from "../../config/axios";

const MedicoState = (props) => {
  const initialState = {
    horarios: [],
    horariomedi: [],
    medicos: [],
  };

  //Dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(medicoReducer, initialState);

  const obtenerMedicos = async () => {
    try {
      //Hacemos la peticion a la Api
      const resultado = await clienteAxios.get("/api/medicos/");

      dispatch({
        type: OBTENER_MEDICOS,
        payload: resultado.data.medico,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerAgendaDisponible = async (medicoId, estado) => {
    try {
     
      const resultado = await clienteAxios.get(
        `/api/agendas/${medicoId}/${estado}`
      );
      dispatch({
        type: OBTENER_AGENDAS_LIBRES,
        payload: resultado.data.agendas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarHora = (id) => {
    dispatch({
      type: ELIMINAR_HORA,
      payload: id,
    });

    setTimeout(() => {
      dispatch({
        type: REINICIAR_HORARIOS,
      });
    }, 2000);
  };

  return (
    <medicoContext.Provider
      //Nos permite darle los valores
      value={{
        horarios: state.horarios,
        horariomedi: state.horariomedi,
        medicos: state.medicos,

        eliminarHora,
        obtenerMedicos,
        obtenerAgendaDisponible,
      }}
    >
      {props.children}
    </medicoContext.Provider>
  );
};

export default MedicoState;
