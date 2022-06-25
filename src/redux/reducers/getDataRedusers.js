import {GET_DATA} from '../actions/actionTypes';

export const getData = (state = [],action)=>{
    switch(action.type){
        case GET_DATA : 
            return [
                action.payload.data
            ]
                
            
        default: return state;
    }
}