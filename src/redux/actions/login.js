import ROOT_TYPES from "../types";
import UTILS_REDUX from "../helpers/Utils";

const fetch_login = (data) => {
    return UTILS_REDUX.makeResultActions(ROOT_TYPES.LOGIN_TYPE, data)
}

const LOGIN_ACTION = {
    fetch_login
}

export default LOGIN_ACTION