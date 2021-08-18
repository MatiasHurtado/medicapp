import React, { useReducer } from "react";
import AuthContext from "./authContext";
import authReducer from "./authReducer";
import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  ERROR_AUTH,
} from "../../types/index";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    cliente: null,
    mensaje: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);
  //Las funciones

  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      console.log(respuesta);

      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });
      

      //Obtener el usuario
      usuarioAutenticado();
    } catch (error) {
      console.log(error.response);
    }
  };
  //Retornar el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
   

    if (token) {
      
      tokenAuth(token);
    }

    try {
      
      const respuesta = await clienteAxios.get("/api/auth");
     
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.cliente,
      });
    } catch (error) {
      console.log(error.response);
      dispatch({
        type: ERROR_AUTH,
        payload: error.response.data,
      });
    }
  };

  const iniciarSesion = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth/auth", datos);
      console.log(respuesta);

      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });
      usuarioAutenticado();
    } catch (error) {
      dispatch({
        type: ERROR_AUTH,
        payload: error.response.data,
      });
    }
  };

  //Cerrar La sesion
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };

  return (
    <AuthContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        cliente: state.cliente,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        usuarioAutenticado,
        iniciarSesion,
        cerrarSesion,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
