export const setInputNameReducer = (state={inputName: ""}, action) => {
    switch(action.type){
        case 'SET-INPUT-NAME':
            return{
                inputName : action.payload
            }
            case 'EDIT-INPUT-NAME':
            return{
                inputName:action.payload 
            }
            case 'CLEAR-INPUT-NAME':
                return{
                    inputName:action.payload 
                }
            default :
            return state 
    }
    }

    export const setInputEmailReducer = (state={inputEmail: ""}, action) => {
        switch(action.type){
            case 'SET-INPUT-EMAIL':
                return{
                    inputEmail : action.payload
                }
                case 'EDIT-INPUT-EMAIL':
                    return{
                        inputEmail:action.payload 
                    }
                    case 'CLEAR-INPUT-EMAIL':
                return{
                    inputName:action.payload 
                }
                default :
                return state 
        }
        }

        export const setInputNumberReducer = (state={inputNumber: ""}, action) => {
            switch(action.type){
                case 'SET-INPUT-NUMBER':
                    return{
                        inputNumber : action.payload
                    }
                    case 'EDIT-INPUT-NUMBER':
                        return{
                            inputNumber:action.payload 
                        }
                        case 'CLEAR-INPUT-NUMBER':
                return{
                    inputName:action.payload 
                }
                    default :
                    return state 
            }
            }
