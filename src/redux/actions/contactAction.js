
export const contactAction = () => (dispatch,getState) => {

    const{contact : {contacts}} = getState()
    const{setInputName : {inputName}} = getState()
    const{setInputEmail : {inputEmail}} = getState()
    const{setInputNumber : {inputNumber}} = getState()

     const data = {
         id: contacts.length + 1,
         name : inputName,
         email: inputEmail,
         phoneNumber : inputNumber,
     }
      
     dispatch({
         type : 'ADD-CONTACT',
         payload : [...contacts, data]
     })

}

export const editContactAction = (id) => (dispatch,getState) => {

    const{contact : {contacts}} = getState()
    const{setInputName : {inputName}} = getState()
    const{setInputEmail : {inputEmail}} = getState()
    const{setInputNumber : {inputNumber}} = getState()

     const data = {
         id: parseInt(id),
         name : inputName,
         email: inputEmail,
         phoneNumber : inputNumber,
     }
      
const updateState = contacts.map((item) => item.id === data.id ? data : item)

     dispatch({
         type : 'EDIT-CONTACT',
         payload : updateState
     })
}


export const deleteContactAction = (id) => (dispatch,getState) => {

    const{contact : {contacts}} = getState()

const deleteContact = contacts.filter((item) => item.id !== id )

    dispatch({
        type : 'DELETE-CONTACT',
        payload : deleteContact
    })

}
