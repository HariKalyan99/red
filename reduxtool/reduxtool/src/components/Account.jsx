import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { decrement, getUserAccount, increment, incrementByValue } from '../slices/accountSlice';

const Account = () => {

    // const [account, setAccount] = useState({amount: 0})
    const [userInput, setUserInput] = useState("");
    const handleInput = (value) =>{
        setUserInput(Number(value))
    }
    // const handleIncClick = () =>{
    // setAccount({amount: account.amount + 1})        
    // }

    // const handleDecClick = () => {
    //     setAccount({amount: account.amount - 1})
    // }
    // const handleIncByAmount = () => {
    //     setAccount({amount: account.amount + userInput})
    // }

    const dispatch = useDispatch();
    const amount = useSelector(state=> state.account.amount);

    
  return (
    <div style={{width: "100%", height: "200px", display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: "center", border: "1px solid black"}}>
        <h1>Account Component</h1>
        <h1>Amount:${amount}</h1>
        <div style={{display: "flex", justifyContent: "space-between", gap: "10px"}}>
            <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => dispatch(increment())}>Increment +</button>
            <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => dispatch(decrement())}>Decrement -</button>
            <input type="text" value={userInput} onChange={(e) => handleInput(e.target.value)} />
            <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => {
                dispatch(incrementByValue(userInput))
                setUserInput("")
            }}>Increment By {userInput}</button>
            <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => {
                dispatch(getUserAccount(1))
            }}>Get User</button>
        </div>
    </div>
  )
}

export default Account