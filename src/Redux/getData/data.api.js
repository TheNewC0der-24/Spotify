import { get_data_failure, get_data_request, get_data_success } from "./data.action"
import axios from "axios";

export const dataApi = (params) => async (dispatch) => {

    // Get the token from the local storage
    let token = window.localStorage.getItem("token");

    // Fetch the API
    axios
        .get(`https://api.spotify.com/v1/search?q=rock&type=${params}`, {
            //  Pass the authorization token in the header
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })
        .then((res) => {
            // Dispatch the success action
            dispatch(dispatch(get_data_success(res.data.tracks.items)))
        })
        .catch((err) => {
            // Dispatch the failure action
            dispatch(get_data_failure())
        })






}