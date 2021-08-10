import React,{useReducer} from 'react';
import {
    Obtener_Horarios,ELIMINAR_HORA} from '../../types/index'
import medicoReducer from './medicoReducer';
import medicoContext from './medicoContext';


const MedicoState = props => {
    const initialState = {
        horarios:[
            {Fecha:"22/12/2019",id:1 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"10/08/2019",id:2 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"30/04/2019",id:3 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"14/02/2019",id:4 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"12/04/2019",id:5 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"15/06/2019",id:6 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"30/08/2019",id:7 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"19/02/2019",id:8 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"20/11/2019",id:9 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"17/10/2019",id:10 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"30/12/2019",id:11 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"16/09/2019",id:12,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"26/05/2019",id:13 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"10/05/2019",id:14 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"30/04/2019",id:15 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"15/02/2019",id:16 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"20/05/2019",id:17 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"13/03/2019",id:18 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"30/02/2019",id:19 ,idMedico:4, especialidad:"Cosmetologia",medico:"Thiare Zenteno"},
            {Fecha:"13/05/2019",id:20 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"20/07/2019",id:21 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
            {Fecha:"10/08/2019",id:22 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"30/02/2019",id:23 ,idMedico:3, especialidad:"Dentista",medico:"Luis Estrella"},
            {Fecha:"10/11/2019",id:24 ,idMedico:2, especialidad:"Ginecologo",medico:"Fernando Guitierrez"},
            {Fecha:"24/06/2019",id:25 ,idMedico:1, especialidad:"Ortodoncia",medico:"Marcelo Herrara"},
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
         medicos:[
            {id:1,nombre:"Marcelo Herrara", especialidad:"Ortodoncia"},
            {id:2,nombre:"Fernando Guitierrez", especialidad:"Ginecologo"},
            {id:3,nombre:"Luis Estrella", especialidad:"Dentista"},
            {id:4,nombre:"Thiare Zenteno", especialidad:"Cosmetologia"},]
    }


    //Dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(medicoReducer, initialState)

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
    }



    return ( 
        <medicoContext.Provider
            //Nos permite darle los valores
            value={{
                horarios:state.horarios,
                horariomedi:state.horariomedi,
                medicos:state.medicos,
                verHorarioMedico,
                eliminarHora

            }}
        >
            {props.children}
        </medicoContext.Provider>
     );
}
 
export default MedicoState