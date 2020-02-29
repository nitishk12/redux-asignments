const randomReducer = (state = '', action) => {
    switch (action.type) {
        case 'GET_RANDOM': {
            return action.payload
        }
        case 'CLEAR_RANDOM': {
            return ''
        }
        default: {
            return state
        }
    }
}
export default randomReducer