import React, { useReducer } from "react";
import clienteAxios from "../../config/axios";
import { OBTENER_AGENDA_CLIENTE,ELIMINAR_HORA_CLIENTE } from "../../types/index";
import clienteContext from "./clienteContext";
import clienteReducer from "./clienteReducer";

const ClienteState = (props) => {
  const initialState = {
    agenda: [],
  };
  const [state, dispatch] = useReducer(clienteReducer, initialState);

  //Funciones ClienteState
  const agregarHora = async (hora) => {
    try {
      const resultado = await clienteAxios.put(
        `/api/agendas/${hora._id}`,
        hora
      );
  
    } catch (error) {
      console.log(error);
    }
  };

  const obtenerAgedaCliente = async (cliente) => {
    

    try {
      const resultado = await clienteAxios.get(`/api/agendas/${cliente._id}`);
    
      dispatch({
        type: OBTENER_AGENDA_CLIENTE,
        payload: resultado.data.agenda,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const eliminarHora = async(hora) =>{

   
      try {
        console.log(hora)
         const resultado = await clienteAxios.put(`/api/agendas/${hora._id}/rechazar`,
         hora);
        console.log(resultado)
      } catch (error) {
        console.log(error)
      }

  }

  return (
    <clienteContext.Provider
      value={{
        agenda: state.agenda,
        agregarHora,
        obtenerAgedaCliente,
        eliminarHora
      }}
    >
      {props.children}
    </clienteContext.Provider>
  );
};

export default ClienteState;
