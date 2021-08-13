import {
    Pedir_Hora,OBTENER_AGENDA_CLIENTE} from '../../types/index'

export default(state,action) =>{
    switch(action.type){
        case Pedir_Hora:
            return{
                ...state,
                agenda: [...state.agenda, action.payload]
            }
        case OBTENER_AGENDA_CLIENTE:
            return{
                ...state,
                agenda:action.payload
            }
            default:
                return state
    }
}