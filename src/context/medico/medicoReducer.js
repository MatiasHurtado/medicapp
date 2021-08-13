import {
    ELIMINAR_HORA,REINICIAR_HORARIOS,OBTENER_MEDICOS,OBTENER_AGENDAS_LIBRES} from '../../types/index'

export default(state,action) =>{
    switch(action.type){
        case OBTENER_AGENDAS_LIBRES:
        
            return{

                ...state,
                horariomedi: action.payload
            }
        case ELIMINAR_HORA:
            return{
                ...state,
                horarios: state.horarios.filter(horario => horario.id !== action.payload),
            }
        case REINICIAR_HORARIOS:
            return{
                ...state,
                horariomedi:[]
            } 

        case OBTENER_MEDICOS:
            return{
                ...state,
                medicos:action.payload
                
            }
       
          
            default:
                return state  
    }
}