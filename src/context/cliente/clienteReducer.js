import {
    Pedir_Hora,} from '../../types/index'

export default(state,action) =>{
    switch(action.type){
        case Pedir_Hora:
            return{
                ...state,
                agenda: [...state.agenda, action.payload]
            }
            default:
                return state
    }
}