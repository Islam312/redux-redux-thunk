import './App.css';

import { addCashActionCreator, getCashActionCreator } from './store/reducers/cashReducer';
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const addCash = (cash) => {
    dispatch(addCashActionCreator(cash))
  }
  const getCash = (cash) => {
    dispatch(getCashActionCreator(cash))
  }
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)
  return (
    <div className="App">
      <h1>{cash}</h1>
      <button onClick={() => addCash(Number(prompt('Enter number')))}>Add Cash</button>
      <button onClick={() => getCash(Number(prompt('Enter number')))}>Get Cash</button>
    </div>
  );
}

export default App;
