import {
  REGISTRO_EXITOSO,
  OBTENER_USUARIO,
  LOGIN_EXITOSO,
  CERRAR_SESION,
  ERROR_AUTH,
} from "../../types/index";

export default (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
    case LOGIN_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
        cargando: false,
      };
    case OBTENER_USUARIO:
      return {
        ...state,
        autenticado: true,
        cliente: action.payload,
        cargando: false,
      };
    case CERRAR_SESION:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        cliente: null,
        autenticado: null,
        cargando: false,
      };
    case ERROR_AUTH:
      localStorage.removeItem("token");
      return {
        ...state,
        mensaje: action.payload,
        token: null,
        cliente: null,
        autenticado: null,
        cargando: false,
      };
    default:
      return state;
  }
};
