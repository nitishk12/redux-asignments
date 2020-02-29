import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import countReducer from '../reducers/countReducer'
import randomReducer from '../reducers/randomReducer'
import numberReducer from '../reducers/numberReducer'
import taskReducer from '../reducers/taskReducer'
import productReducer from '../reducers/productReducer'
import usersReducer from '../reducers/usersReducer'
import userIdReducer from '../reducers/userIdReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const configureStore = () => {
    const store = createStore(combineReducers({
        count: countReducer,
        random: randomReducer,
        number: numberReducer,
        task: taskReducer,
        products: productReducer,
        users: usersReducer,
        userId: userIdReducer,
    }), composeEnhancers(applyMiddleware(thunk)))
    return store
}
export default configureStore