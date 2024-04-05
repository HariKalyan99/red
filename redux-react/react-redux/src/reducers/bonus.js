import { getBonUserFulfilled, getBonUserPending, getBonUserRejected, incBonus, incByAmt } from "../actions";

export function bonusReducers(state={points: 0}, action) {
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