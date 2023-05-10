import React, { useState } from 'react';
import "./App.css"
import Form from '../Components/Form';
import Cart from '../Components/Cart';
import ProductContainer from '../Components/ProductContainer';
import Cartpage from '../Components/Cartpage';

function App(props) {

  const [toggleCart, setToggleCart] = useState(false)

  return (
    <div className=' App-div '>
      <Cart setToggleCart={setToggleCart} />
      <Form />
      <ProductContainer />
      {toggleCart && <Cartpage setToggleCart={setToggleCart} />}
    </div>
  );
}

export default App;
