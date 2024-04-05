import React, { useState } from "react";
import {useSelector, useDispatch} from 'react-redux';
import { decrement, getUserAccount, increment, incrementByAmount } from "../actions";

const Account = () => {
  // const [account, setAccount] = useState({amount: 0});
  const [value, setValue] = useState("");

  
    const amount = useSelector(state => state.account.amount);

    const dispatch = useDispatch();
  return (
    <div
      style={{
        width: "100%",
        height: "300px",
        border: "2px solid grey",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        alignItems: "center",
      }}
    >
      <h1>Account Component</h1>
      <h1>Amount$:{amount} </h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment+</button>
        <button onClick={() => dispatch(decrement())}>Decrement-</button>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          value={value}
        />
        <button onClick={() => dispatch(incrementByAmount(value))}>
          Increment+ by {value}
        </button>
        <button onClick={() => dispatch(getUserAccount(1))}>
          Initialize user amount
        </button>
      </div>
    </div>
  );
};

export default Account;
