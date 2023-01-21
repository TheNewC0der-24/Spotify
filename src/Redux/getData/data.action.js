import {  GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./data.actionType"


export const get_data_request = ()=>{
    return{
        type :GET_DATA_REQUEST
    }
}

export const get_data_success = (payload)=>{
    return{
        type : GET_DATA_SUCCESS,
        payload : payload
    }
}
export const get_data_failure = ()=>{
    return{
        type : GET_DATA_FAILURE
    }
}