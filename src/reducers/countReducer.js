const initialCount = 0
const countReducer = (state = initialCount, action) => {
    switch (action.type) {
        case 'INC': {
            return state + 1
        }
        default: {
            return state
        }
    }
}
export default countReducer