import React from 'react'
import { incrementBonus } from '../actions'
import {useSelector, useDispatch} from 'react-redux';
const Bonus = () => {
    const points = useSelector(state => state.bonus.points);
    const dispatch = useDispatch()
  return (
    <div style={{width: "100%", height: "300px", border: "2px solid grey", display: "flex", flexDirection: "column", justifyContent: "space-evenly", alignItems: "center"}}>
        <h1>Bonus Component</h1>
        <h1>Total Point:{points} </h1>
        <div>
        <button onClick={() => dispatch(incrementBonus())}>Increment+</button>
        </div>
    </div>
  )
}

export default Bonus