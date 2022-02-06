export const contactReducer = (state={contacts : []}, action) => {
switch(action.type){
    case 'ADD-CONTACT' :
        return{
            contacts : action.payload
        }
    case 'EDIT-CONTACT':
        return{
            contacts: action.payload
        }
    case 'DELETE-CONTACT' :
         return{
            contacts: action.payload
        }
        default :
        return state 
}
}
