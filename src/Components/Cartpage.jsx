import React, { useContext } from 'react';
import CartItem from './CartItem';
import CartContext from '../Context/CartContext';


function Cartpage(props) {

    const cartCTX = useContext(CartContext)




    return (
        <div className=' Cartpage-div '>
            <button onClick={() => { props.setToggleCart(p => !p) }}>ClOSE</button>
            <div>
                <div className='productContaier'>
                    {
                        cartCTX.cartArr.map((data) => {
                            return <CartItem key={data._id} data={data} />
                        })
                    }
                </div>
            </div>
            <button onClick={cartCTX.placeOrder}>PLACE ORDER</button>
        </div>
    );
}

export default Cartpage;
