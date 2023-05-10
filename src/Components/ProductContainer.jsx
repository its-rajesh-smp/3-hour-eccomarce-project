import React, { useContext } from 'react';
import Product from './Product';
import CartContext from '../Context/CartContext';


function ProductContainer(props) {

    const cartCTX = useContext(CartContext)


    return (
        <div className=' ProductContainer-div '>
            {
                cartCTX.productArr.map((data) => {
                    console.log(data);
                    return (<Product key={data._id} data={{ ...data }} />)
                })
            }
        </div>
    );
}

export default ProductContainer;
