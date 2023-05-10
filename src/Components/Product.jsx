import React, { useContext } from 'react';
import CartContext from '../Context/CartContext';


function Product(props) {

    const cartCTX = useContext(CartContext)

    const onBtnClick = (size) => {
        const newCartProduct = {
            name: props.data.name, desc: props.data.desc, price: props.data.price, size: size
        }
        cartCTX.addToCartList(newCartProduct)

    }


    return (
        <div className=' Product-div '>
            <p>{props.data.name}</p>
            <p>{props.data.desc}</p>
            <p>{props.data.price}</p>

            {props.data.l && <button onClick={() => { onBtnClick("l") }} >Buy Large</button>}
            {props.data.m && <button onClick={() => { onBtnClick("m") }} >Buy Medium</button>}
            {props.data.s && <button onClick={() => { onBtnClick("s") }} >Buy Small</button>}

        </div>
    );
}

export default Product;
