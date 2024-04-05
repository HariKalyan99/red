import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import logger from "redux-logger";
import {thunk} from 'redux-thunk'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import { accountsReducer } from './reducers/account.js'
import { bonusReducers } from './reducers/bonus.js'
import {Provider} from 'react-redux';

const store = createStore(combineReducers({
  account: accountsReducer,
  bonus: bonusReducers
}), applyMiddleware(logger, thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
