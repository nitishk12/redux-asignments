const initialState = [10, 20]
const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_NUMBER': {
            return [...state, action.payload]
        }
        default: {
            return [...state]
        }
    }
}
export default numberReducer