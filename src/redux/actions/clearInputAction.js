export const clearInputNameAction = () => (dispatch) => {

    dispatch({
        type: 'CLEAR-INPUT-NAME',
        payload: "",
    })
}

export const clearInputEmailAction = () => (dispatch) => {

    dispatch({
        type: 'CLEAR-INPUT-EMAIL',
        payload: "",
    })
}

export const clearInputNumberAction = () => (dispatch) => {

    dispatch({
        type: 'CLEAR-INPUT-NUMBER',
        payload: "",
    })
}