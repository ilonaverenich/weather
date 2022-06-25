import { combineReducers } from "redux";
import { getData } from "./getDataRedusers";



export default combineReducers(
    {
        data: getData
    }
)

