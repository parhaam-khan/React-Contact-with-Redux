import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { contactReducer } from "./reducers/contactReducer";
import { setInputEmailReducer, setInputNameReducer, setInputNumberReducer } from "./reducers/setInputReducer";

const reducer = combineReducers({
    contact: contactReducer,
    setInputName : setInputNameReducer,
    setInputEmail : setInputEmailReducer,
    setInputNumber : setInputNumberReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(reducer,initialState,
    compose(applyMiddleware(...middleware),
     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()))

export default store;