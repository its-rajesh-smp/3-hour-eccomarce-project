import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';


function CartItem(props) {

    const cartCTX = useContext(CartContext)

    return (
        <div className=' CartItem-div '>
            <p>{props.data.name}</p>
            <p>{props.data.price}</p>
            <p>{props.data.size}</p>
            <button onClick={() => { cartCTX.deleteCartItem(props.data._id) }}>DELETE</button>
        </div>
    );
}

export default CartItem;
