import axios  from "axios";

export const inc = "account/increment";
export const dec = "account/decrement";
export const incByAmt = "account/incrementByAmount";
export const getAccUserPending = "account/getUser/pending"
export const getAccUserFulfilled = "account/getUser/fulfilled"
export const getAccUserRejected = "account/getUser/rejected"

export const incBonus = 'bonus/increment'
export const getBonUserPending = '/bonus/getuser/pending' 
export const getBonUserFulfilled = '/bonus/getuser/fulfilled' 
export const getBonUserRejected = '/bonus/getuser/rejected' 


//action creators

export function getUserAccount(id) {
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

export function getAccountUserFulfilled (val) {
    return { type: getAccUserFulfilled, payload: val }
}

export function getAccountUserPending () {
    return { type: getAccUserPending }
}

export function getAccountUserRejected (error) {
    return { type: getAccUserRejected, error }
}

export function increment() {
  return { type: inc };
}

export function decrement() {
  return { type: dec };
}
export function incrementByAmount(val) {
  return { type: incByAmt, payload: Number(val) };
}


//bonus


export function incrementBonus() {
    return { type: incBonus };
}

export function getUserBonus (id) {
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

export function getBonusUserFulfilled (val) {
    return {type: getBonUserFulfilled, payload: val}
}

export function getBonusUserPending () {
    return {type: getBonUserPending}
}

export function getBonusUserRejected (error) {
    return {type: getBonUserFulfilled, error}
}
