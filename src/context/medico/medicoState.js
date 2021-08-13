import React,{useReducer} from 'react';
import {
    Obtener_Horarios,ELIMINAR_HORA,REINICIAR_HORARIOS,OBTENER_MEDICOS} from '../../types/index'
import medicoReducer from './medicoReducer';
import medicoContext from './medicoContext';
import clienteAxios from '../../config/axios'


const MedicoState = props => {
    const initialState = {
        horarios:[
            {Fecha:"22/12/2019",id:1 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"10/08/2019",id:2 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"14/02/2019",id:4 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"12/04/2019",id:5 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"15/06/2019",id:6 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"30/12/2019",id:11 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"10/05/2019",id:14 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"30/04/2019",id:15 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"15/02/2019",id:16 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"13/03/2019",id:18 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"13/05/2019",id:20 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"20/07/2019",id:21 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"30/02/2019",id:23 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"10/11/2019",id:24 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"10/04/2019",id:26 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"30/03/2019",id:27 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"10/04/2019",id:28 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"20/05/2019",id:29 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"10/04/2019",id:30 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"01/03/2019",id:31 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"11/01/2019",id:32 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"22/02/2019",id:33 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"}
        ],
          horariomedi: [],
         medicos:null
    }


    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(medicoReducer, initialState)

    const {horarios,horariomedi,medicos} = initialState
    const obtenerMedicos=  async() =>{

        try {

            //Hacemos la peticion a la Api
            const resultado = await clienteAxios.get('/api/medicos')
            console.log(resultado.data)
           
           

            dispatch({
                type:OBTENER_MEDICOS,
                payload:resultado.data.medico
             })

            
        } catch (error) {
            console.log(error)
        }        
    }

    //Funciones Para el Reducer
    const verHorarioMedico =(id) =>{
        dispatch({
            type:Obtener_Horarios,
            payload:id
        })
    
    }
    const eliminarHora =(id) =>{
        dispatch({
            type:ELIMINAR_HORA,
            payload:id
        })

        setTimeout(()=>{
            dispatch({
                type:REINICIAR_HORARIOS
            })
        },2000);
    }




    return ( 
        <medicoContext.Provider
            //Nos permite darle los valores
            value={{
                horarios:state.horarios,
                horariomedi:state.horariomedi,
                medicos:state.medicos,
                verHorarioMedico,
                eliminarHora,
                obtenerMedicos

            }}
        >
            {props.children}
        </medicoContext.Provider>
     );
}
 
export default MedicoState