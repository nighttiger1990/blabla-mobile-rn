import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import loggerMiddleware from 'redux-logger'
import { persistReducer } from 'redux-persist'
import ROOT_REDUCERS from '../reducers';

const middlewares = []

//Nếu đang ở môi trường Development thì thêm middleware redux-logger
console.log("__DEV__", __DEV__)
if (__DEV__) {
    middlewares.push(loggerMiddleware)
}

//Cấu hình sử dụng redux-persist
const persistConfig = {
    timeout: 10000,
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['personal'],
    migrate: (state) => {
        console.log('Migration Running!', state)
        return Promise.resolve(state)
    }
}

//Tạo persistReducers từ RootReducers để apply redux-persist
const persistReducers = persistReducer({ ...persistConfig }, ROOT_REDUCERS)

//Enable Debugger cho React-Native-Debugger
const composeEnhancers = typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose

export function makeStore(initialState) {
    return createStore(persistReducers, initialState, composeEnhancers(applyMiddleware(...middlewares)))
}

// const store = configureStore()
// const pStore = persistStore(store, null, (a, b, c) => {
//     console.log("====Rehydrate Call back", a, b, c)
// })
// export default { store: store, pStore: pStore }