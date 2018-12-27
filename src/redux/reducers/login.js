import UTILS_REDUX from "../helpers/Utils";
import ROOT_TYPES from "../types";

const initialState = {
    isLoading: false,
    userInfo: null,
    hasError: null,
    message: ""
}

/**
 * 
 * @param {{isLoading: boolean, userInfo: Object, hasError: boolean, message: string}} state 
 * @param {{type: string, payload: Object}} action 
 */
const LOGIN_REDUCER = (state = initialState, action) => {
    switch (action.type) {
        case ROOT_TYPES.LOGIN_TYPE.FETCH_LOGIN:
            state.isLoading = true
            state.hasError = false
            state.message = ""
            return { ...state }
        case ROOT_TYPES.LOGIN_TYPE.FETCH_LOGIN_SUCCESS:
            state.isLoading = false
            state.hasError = false
            state.message = ""
            state.userInfo = action.payload
            return { ...state }
        case ROOT_TYPES.LOGIN_TYPE.FETCH_LOGIN_FAIL:
            state.isLoading = false
            state.hasError = true
            state.message = action.payload && action.payload.message && typeof action.payload.message == 'string' ? action.payload.message : "Có lỗi trong quá trình đăng nhập"
            return { ...state }
        default:
            return state
    }
}

export default LOGIN_REDUCER