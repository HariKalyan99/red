import {createAction, createSlice} from '@reduxjs/toolkit';

const incrementByAccount = createAction('account/incrementByValue')

const bonusSlice = createSlice({
  name: 'bonus',
  initialState: {
    points: 0
  },
  reducers: {
    increment: state => {state.points += 1},
  },
  extraReducers: (builder) => {
    builder.addCase(incrementByAccount, (state, action) => {
        if(action.payload >= 100){
            state.points++;
        }
    })
  }
})

export const {increment} = bonusSlice.actions;

export default bonusSlice.reducer;