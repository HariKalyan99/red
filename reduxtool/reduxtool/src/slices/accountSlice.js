import { createSlice } from '@reduxjs/toolkit'

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    amount: 0
  },
  reducers: {
    increment: state => {
      state.amount += 1
    },
    decrement: state => {
      state.amount -= 1
    },
    incrementByValue: (state, action) => {
        state.amount += action.payload
    }
  }
})

export const { increment, decrement, incrementByValue } = accountSlice.actions;

export default accountSlice.reducer;

