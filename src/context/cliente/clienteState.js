import React,{useReducer} from 'react';
import clienteAxios from '../../config/axios';
import {Pedir_Hora} from '../../types/index'
import clienteContext from './clienteContext';
import clienteReducer from './clienteReducer';




const ClienteState = props => {

   

    const initialState ={
        agenda:[]
    }
    const [state,dispatch] = useReducer(clienteReducer,initialState)



    //Funciones ClienteState
    const agregarHora = async (hora)=>{

       try {
            
            const resultado = await clienteAxios.put(`/api/agendas/${hora._id}`,hora)
            console.log(resultado)
            // dispatch({
            //     type:Pedir_Hora,
            //     payload:hora
            // })
       } catch (error) {
           console.log(error)
       }

        

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