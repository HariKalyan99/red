// import {createStore, applyMiddleware, combineReducers} from 'redux';
// import logger from 'redux-logger';
// import axios from 'axios';
// import {thunk} from 'redux-thunk';

// //action name constants with schema

// const getUsrAccFullfilled = 'account/getUserAccountFullfilled';
// const getUsrAccRejected = 'account/getUserAccountRejected';
// const getUsrAccPending = 'account/getUserAccountPending';
// const inc = 'account/increment';
// const dec = 'account/decrement';
// const incByAmnt = 'account/incrementByAmount';

// const incBonus = "bonus/incrementBonus"

// //store
// const store = createStore(combineReducers({
//     account: accountsReducer,
//     bonus: bonusReducer

// }), applyMiddleware(logger.default, thunk));

// //reducer
// function accountsReducer(state={amount: 1}, action) {

//     switch(action.type){
//         case getUsrAccFullfilled:
//             return {amount: action.payload, pending: false};
//         case getUsrAccRejected:
//             return {...state, error: action.payload, pending: false};
//         case getUsrAccPending:
//             return {...state, pending: true}
//         case inc:
//             return {amount: state.amount + 1};
//         case dec:
//             return {amount: state.amount - 1};
//         case incByAmnt:
//             return {amount: state.amount + action.payload};
//         default:
//             return state
//     }
//     // if(action.type === inc){
//     //     return {amount: state.amount + 1}
//     // }else if(action.type === dec){
//     //     return {amount: state.amount - 1}
//     // }else if(action.type === incByAmnt){
//     //     return {amount: state.amount + action.payload}
//     // }
//     // return state;
// }

// function bonusReducer(state = {points: 0}, action){
//     switch(action.type){
//         // if we were to depend on the account actions then we could utilize the below or else include a new action for the respective reducer actions
//         case incByAmnt:
//             if(action.payload >= 100){
//                 return {points: state.points + action.payload};
//             }
//         case incBonus:
//             return {points: state.points + 1}
//         default:
//             return state;

//     }
// }

// //global state

// // console.log(store.getState());

// // setInterval(() => {
// //     store.dispatch({type: 'incrementByAmount', payload: 10})
// // }, 2000)

// // store.subscribe(() => {
// //     console.log(store.getState())
// // })

// // console.log(store.getState());

// // store.dispatch({type: 'increment'})

// //action creators

//  function getUserAccount(id) {
//     return async (dispatch, getState) => {
//         try {
//             dispatch(initfunctionPending())
//             const {data} = await axios.get(`http://localhost:8081/account?id=${id}`);
//             dispatch(initfunctionFullfilled(data[0].amount))
//         }catch(Error){
//             dispatch(initfunctionRejected(Error.message))
//         }
//     }
// }

// function initfunctionRejected(error) {
//     return {type: getUsrAccRejected, payload: error}
// }

// function initfunctionFullfilled(val) {
//     return {type: getUsrAccFullfilled, payload: val};
// }

// function initfunctionPending() {
//     return {type: getUsrAccPending};
// }

// function increment() {
//     return {type: inc}
// }

// function decrement() {
//     return {type: dec}
// }

// function incrementByAmount(val) {
//     return {type: incByAmnt, payload: val}
// }

// function incrementBonus() {
//     return {type: incBonus}
// }

// setTimeout(() => {
//     store.dispatch(getUserAccount(2))
//     // store.dispatch(incrementByAmount(100))
//     // store.dispatch(incrementBonus()) //this is meant for bonus reducer
// }, 1000)





// //////////////////////////////////////////////////////////////////////////////////////--------------------------------------------------------------\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\









//configure store
import { createStore, applyMiddleware, combineReducers } from "redux";
import logger from "redux-logger";
import axios from "axios";
import {thunk} from 'redux-thunk'


// action names

// const init = "account/init";

const inc = "account/increment";
const dec = "account/decrement";
const incByAmt = "account/incrementByAmount";
const getAccUserPending = "account/getUser/pending"
const getAccUserFulfilled = "account/getUser/fulfilled"
const getAccUserRejected = "account/getUser/rejected"

const incBonus = 'bonus/increment'
const getBonUserPending = '/bonus/getuser/pending' 
const getBonUserFulfilled = '/bonus/getuser/fulfilled' 
const getBonUserRejected = '/bonus/getuser/rejected' 

const store = createStore(combineReducers({
    account: accountsReducer,
    bonus: bonusReducers
}), applyMiddleware(logger.default, thunk));

function accountsReducer(state = { amount: 1 }, action) {
  // if(action.type === inc){
  //     return {amount: state.amount + 1}
  // }else if(action.type === dec){
  //     return {amount: state.amount - 1}
  // }else if(action.type === incByAmt){
  //     return {amount: state.amount + action.payload}
  // }
  // return state;

  switch (action.type) {
    case getAccUserFulfilled:
        return { amount: action.payload,  pending: false };
    case getAccUserRejected:
        return { ...state, error: action.error, pending: false };
    case getAccUserPending:
        return { ...state, pending: true};
    case inc:
      return { amount: state.amount + 1 };
    case dec:
      return { amount: state.amount - 1 };
    case incByAmt:
      return { amount: state.amount + action.payload };
      default:
        return state;
  }
}

function bonusReducers(state={points: 0}, action) {
    switch (action.type) {
        case getBonUserPending:
            return {...state, pending: true}
        case getBonUserFulfilled:
            return {points: state.points + action.payload, pending: false}
        case getBonUserRejected:
            return { ...state, error: action.error , pending: false}
        case incBonus:
            return { points: state.points + 1 };
        case incByAmt:
            if(action.payload>=100)
                return {points: state.points + 1}
        default:
            return state;
      }
}


//global state
// const history = [];
// ******************************************************

// store.subscribe(() => {
//     history.push(store.getState()); when ever the state changes then subscribe tries to exposes the changed or updated value
//     console.log(history)
// })



//async api call
// ******************************************************
//we cant add the async function to dispatch actions, it should return a plain object. this is the reason why we use a middleware called thunk

// async function getUser () {
//     const {data} = await axios.get('http://localhost:8081/accounts/1');
//     console.log(data)
// }

// getUser()

//action creators

function getUserAccount(id) {
    return async(dispatch, getState) => {
        try{
            dispatch (getAccountUserPending());
            const {data} = await axios.get(`http://localhost:8081/accounts/${id}`);
            dispatch (getAccountUserFulfilled(data.amount));
        }catch(error){
            dispatch (getAccountUserRejected(error.message));
        }
    }
}

function getAccountUserFulfilled (val) {
    return { type: getAccUserFulfilled, payload: val }
}

function getAccountUserPending () {
    return { type: getAccUserPending }
}

function getAccountUserRejected (error) {
    return { type: getAccUserRejected, error }
}

function increment() {
  return { type: inc };
}

function decrement() {
  return { type: dec };
}
function incrementByAmount(val) {
  return { type: incByAmt, payload: val };
}


//bonus


function incrementBonus() {
    return { type: incBonus };
}

function getUserBonus (id) {
    return async(dispatch, getState) => {
        try{
            dispatch(getBonusUserPending())
            const {data} = await axios.get(`http://localhost:8081/bonus/${id}`);
            dispatch(getBonusUserFulfilled(data.points))
        }catch(error){
            dispatch(getBonusUserRejected(error.message))
        }
    }
}

function getBonusUserFulfilled (val) {
    return {type: getBonUserFulfilled, payload: val}
}

function getBonusUserPending () {
    return {type: getBonUserPending}
}

function getBonusUserRejected (error) {
    return {type: getBonUserFulfilled, error}
}

// setInterval(() => {
//   store.dispatch(getUser(1));
// }, 1000);

setTimeout(() => {
    // store.dispatch(incrementBonus());
    // store.dispatch(getUserAccount(3))
    store.dispatch(getUserBonus(0))
  }, 1000);