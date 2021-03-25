import { combineReducers } from "redux";
import { invoiceReducer } from "./invoiceReducer";
import {cloudReducer} from './cloudReducer'
import { viewReducer } from "./viewReducer";
const rootReducer = combineReducers({
    invoice: invoiceReducer,
    cloud: cloudReducer,
    view: viewReducer
})

export default rootReducer