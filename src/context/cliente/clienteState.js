import React,{useReducer} from 'react';
import {
    Pedir_Hora} from '../../types/index'
import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';




const ClienteState = props => {

   

    const initialState ={
        agenda:[]
    }
    const [state,dispatch] = useReducer(clienteReducer,initialState)



    //Funciones ClienteState
    const agregarHora =hora=>{
        dispatch({
            type:Pedir_Hora,
            payload:hora
        })

    }

    return ( 
        <clienteContext.Provider
            value={{
                agenda:state.agenda,
                agregarHora
            }}
        >
            {props.children}
        </clienteContext.Provider>
     );
}
 
export default ClienteState;