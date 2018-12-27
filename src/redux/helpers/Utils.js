export const makeResultActions = (type, data) => {
    return { type: type, payload: data }
}

const UTILS_REDUX = {
    makeResultActions
}

export default UTILS_REDUX
