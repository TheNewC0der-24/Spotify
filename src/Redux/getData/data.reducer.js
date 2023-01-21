import {  GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./data.actionType"

const initState = {
    data : [],
    isLoading : false,
    isError : false

}
export const data_reducer = (state=initState,{type,payload})=>{
    switch(type){
        case GET_DATA_REQUEST :
            return {
                ...state,
                isLoading : true,
                isError : false
            }
        case GET_DATA_SUCCESS : 
            return {
                ...state,
                isLoading : false,
                isError : false,
                data : payload
            }
        case GET_DATA_FAILURE :
            return {
                ...state,
                isLoading : false,
                isError : true
            }
            
        default :
            return state
    }

}