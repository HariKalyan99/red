import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import {useSelector, useDispatch} from 'react-redux';
import Reward from './components/Reward';

function App() {

  const amount = useSelector(state=> state.account.amount);
  const points = useSelector(state=> state.bonus.points);

  const rewards = useSelector(state => state.reward.points)
  
  return (
    <div>
      <h1>App</h1>
      <h1>Current Amount:{amount} </h1>
      <h1>Total Bonus: {points}</h1>
      <h1>Total Rewards: {rewards}</h1>
      <Account />
      <Bonus />
      <Reward />
    </div>
  )
}

export default App
