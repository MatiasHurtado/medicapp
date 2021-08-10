import {
    Obtener_Horarios,ELIMINAR_HORA,REINICIAR_HORARIOS} from '../../types/index'

export default(state,action) =>{
    switch(action.type){
        case Obtener_Horarios:
            return{

                ...state,
                horariomedi: state.horarios.filter(horariomedi => horariomedi.idMedico === action.payload)
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
    }
}