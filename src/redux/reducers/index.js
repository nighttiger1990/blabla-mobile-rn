import { combineReducers } from 'redux'
import LOGIN_REDUCER from './login';

const ROOT_REDUCERS = combineReducers({
    auth: LOGIN_REDUCER
})

export default ROOT_REDUCERS