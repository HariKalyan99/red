import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getUserAccount = createAsyncThunk(
    'account/getUser',
    async (userId, thunkAPI) => {
      const {data} = await axios.get(`http://localhost:8081/accounts/${userId}`) 
      return data.amount
    },
  )

  //immer js library will make sure it creates a copy out of state object-property of it
const accountSlice = createSlice({
  name: 'account',
  initialState: {
    amount: 0
  },
  reducers: {
    increment: state => {
      state.amount += 1;
    },
    decrement: state => {
      state.amount -= 1;
    },
    incrementByValue: (state, action) => {
        state.amount += action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getUserAccount.fulfilled, (state, action) => {
        state.amount+=action.payload
    })
  }
})

export const { increment, decrement, incrementByValue } = accountSlice.actions;

export default accountSlice.reducer;

