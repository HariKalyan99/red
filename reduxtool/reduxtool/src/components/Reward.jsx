import React  from 'react'
import {useSelector, useDispatch} from 'react-redux';
import { increment, incrementByValue } from '../reducers/rewardReducer';

const Reward = () => {

    // const [bonus, setBonus] = useState({points: 1});
    // const handleBonusInc = () => {
    //     setBonus({points: bonus.points + 1})
    // }
    const points = useSelector(state => state.reward.points);
    const dispatch = useDispatch();
  return (
    <div style={{width: "100%", height: "200px", display: "flex",
    flexDirection: "column", justifyContent: "center", alignItems: "center", border: "1px solid black"}}>
        <h1>Reward Component</h1>
        <h1>Total Point: {points}</h1>
        <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => dispatch(increment())}> Increment +</button>
        <button style={{backgroundColor: "pink", width: '100px', height: "30px"}} onClick={() => {
                dispatch(incrementByValue(100))
                setUserInput("")
            }}>Increment By 100</button>
    </div>
  )
}

export default Reward;