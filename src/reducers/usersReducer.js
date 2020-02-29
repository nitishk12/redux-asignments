const usersInitialState = []
const usersReducer = (state = usersInitialState, action) => {
    switch (action.type) {
        case 'SET_USER': {
            return [...action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default usersReducer