
import './App.css'
import Account from './components/Account'
import Bonus from './components/Bonus'
import {useSelector} from 'react-redux';

function App() {

  const amount = useSelector(state => state.account.amount);
  const points = useSelector(state => state.bonus.points);
  const {pending, error} = useSelector(state => state.account);

  return (
    <div>
      <h1>App</h1>
      {pending ? <p>Loading.....</p> : error ? <p>{error}</p> : <h1>Current Amount: {amount}</h1>}
      <h1>Total Bonus: {points}</h1>
      <Account  />
      <Bonus />
    </div>
  )
}

export default App
