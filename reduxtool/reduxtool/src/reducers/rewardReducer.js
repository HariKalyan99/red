import {createAction, createReducer} from '@reduxjs/toolkit'


export const increment = createAction('reward/increment');
export const incrementByValue = createAction('reward/incrementByValue')

const  initialState = {
    points: 0
}

const rewardReducer = createReducer(initialState, (builder) => {
    builder.addCase(increment, (state, action) => {
        state.points++
    }).addCase(incrementByValue, (state, action) => {
        state.points+=action.payload
    })
})

export default rewardReducer;