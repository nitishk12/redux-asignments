import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import configureStore from './store/configureStore';
import { startGetUsers } from './actions/users'
import { startGetId } from './actions/userId'
import { startGetAuto } from './actions/autofill'

const store = configureStore()
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(startGetUsers())
store.dispatch(startGetId())
store.dispatch(startGetAuto())

const ele = (
    <Provider store={store}>
        <App />
    </Provider>
)


ReactDOM.render(ele, document.getElementById('root'));
serviceWorker.unregister();
