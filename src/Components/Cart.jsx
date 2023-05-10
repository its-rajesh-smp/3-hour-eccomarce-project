import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';

function Cart(props) {
    const cartCTX = useContext(CartContext)

    return (
        <div className=' Cart-div '>
            <button onClick={() => { props.setToggleCart(p => !p) }}>CART <span>{cartCTX.cartArr.length}</span></button>
        </div>
    );
}

export default Cart;
