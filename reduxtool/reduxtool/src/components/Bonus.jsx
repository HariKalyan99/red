import React, { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment } from '../slices/bonusSlice';

const Bonus = () => {

    // const [bonus, setBonus] = useState({points: 1});
    // const handleBonusInc = () => {
    //     setBonus({points: bonus.points + 1})
    // }
    const points = useSelector(state => state.bonus.points);
    const dispatch = useDispatch();
  return (
    <div style={{width: "100%", height: "200px", display: "flex",
    flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black"}}>
        <h1>Bonus Component</h1>
        <h1>Total Point: {points}</h1>
        <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => dispatch(increment())}> Increment +</button>
    </div>
  )
}

export default Bonus