
export const setInputNameAction = (e) => (dispatch) => {

    dispatch({
        type: 'SET-INPUT-NAME',
        payload: e.target.value
    })
}

export const setInputEmailAction = (e) => (dispatch) => {

    dispatch({
        type: 'SET-INPUT-EMAIL',
        payload: e.target.value
    })
}

export const setInputNumberAction = (e) => (dispatch) => {

    dispatch({
        type: 'SET-INPUT-NUMBER',
        payload: e.target.value
    })
}


