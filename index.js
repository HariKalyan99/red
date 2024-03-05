
import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import axios from 'axios';
import {thunk} from 'redux-thunk';



//action name constants with schema

const getUsrAccFullfilled = 'account/getUserAccountFullfilled';
const getUsrAccRejected = 'account/getUserAccountRejected';
const getUsrAccPending = 'account/getUserAccountPending';
const inc = 'account/increment';
const dec = 'account/decrement';
const incByAmnt = 'account/incrementByAmount';

const incBonus = "bonus/incrementBonus"


//store
const store = createStore(combineReducers({
    account: accountsReducer,
    bonus: bonusReducer

}), applyMiddleware(logger.default, thunk));


//reducer
function accountsReducer(state={amount: 1}, action) {

    switch(action.type){
        case getUsrAccFullfilled: 
            return {amount: action.payload, pending: false};
        case getUsrAccRejected: 
            return {...state, error: action.payload, pending: false};
        case getUsrAccPending: 
            return {...state, pending: true}
        case inc: 
            return {amount: state.amount + 1};
        case dec: 
            return {amount: state.amount - 1};
        case incByAmnt: 
            return {amount: state.amount + action.payload};
        default:
            return state
    }
    // if(action.type === inc){
    //     return {amount: state.amount + 1}
    // }else if(action.type === dec){
    //     return {amount: state.amount - 1}
    // }else if(action.type === incByAmnt){
    //     return {amount: state.amount + action.payload}
    // }
    // return state;
}


function bonusReducer(state = {points: 0}, action){
    switch(action.type){
        // if we were to depend on the account actions then we could utilize the below or else include a new action for the respective reducer actions 
        case incByAmnt: 
            if(action.payload >= 100){
                return {points: state.points + action.payload};
            }
        case incBonus: 
            return {points: state.points + 1}
        default:
            return state;

    }
}

//global state

// console.log(store.getState());

// setInterval(() => {
//     store.dispatch({type: 'incrementByAmount', payload: 10})
// }, 2000)



// store.subscribe(() => {
//     console.log(store.getState())
// })





// console.log(store.getState());

// store.dispatch({type: 'increment'})




//action creators


 function getUserAccount(id) {
    return async (dispatch, getState) => {
        try {
            dispatch(initfunctionPending())
            const {data} = await axios.get(`http://localhost:8081/account?id=${id}`);
            dispatch(initfunctionFullfilled(data[0].amount))
        }catch(Error){
            dispatch(initfunctionRejected(Error.message))
        }
    }
}

function initfunctionRejected(error) {
    return {type: getUsrAccRejected, payload: error}
}

function initfunctionFullfilled(val) {
    return {type: getUsrAccFullfilled, payload: val};
}

function initfunctionPending() {
    return {type: getUsrAccPending};
}


function increment() {
    return {type: inc}
}


function decrement() {
    return {type: dec}
}


function incrementByAmount(val) {
    return {type: incByAmnt, payload: val}
}

function incrementBonus() {
    return {type: incBonus}
}


setTimeout(() => {
    store.dispatch(getUserAccount(2))
    // store.dispatch(incrementByAmount(100))
    // store.dispatch(incrementBonus()) //this is meant for bonus reducer
}, 1000)

