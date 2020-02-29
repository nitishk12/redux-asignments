const userIdReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_ID': {
            return { ...action.payload }
        }
        default: {
            return { ...state }
        }
    }
}
export default userIdReducer