import React from 'react';
import { useSelector } from 'react-redux';
import { selectTablets, selectLaptops, selectAccessories } from './reducers/inventory';
import { selectCart } from './reducers/rootReducer';
import './App.css';

function App() {
  const tablets = useSelector(selectTablets)
  const laptops = useSelector (selectLaptops)
  const accessories = useSelector(selectAccessories)
  const cart = useSelector(selectCart)
  console.log(tablets)
  console.log(laptops)
  console.log(accessories)
  console.log(cart)

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
