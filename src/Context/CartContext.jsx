import React, { useEffect, useState } from 'react';
import axios from 'axios';
export const CRUDURL = "https://crudcrud.com/api/eac260e51a5e43b7b6042410a195a153"

const CartContext = React.createContext({ addToProductList: () => { } })




export const CartContextProvider = (props) => {

    const [productArr, setProductArr] = useState([])
    const [cartArr, setCartArr] = useState([])




    /* -------------------------------------------------------------------------- */
    /*                            FETCH PRODUCT ON LOAD                           */
    /* -------------------------------------------------------------------------- */
    useEffect(() => {
        const fetchFUNC = async () => {
            try {
                const productResponse = await axios.get(`${CRUDURL}/shopItems`)
                const cartResponse = await axios.get(`${CRUDURL}/cartList`)
                setProductArr(productResponse.data)
                setCartArr(cartResponse.data)
            } catch (error) {
                alert(error);
            }
        }
        fetchFUNC()
    }, [])




    /* -------------------------------------------------------------------------- */
    /*                             ADD PRODUCT TO LIST                            */
    /* -------------------------------------------------------------------------- */
    const addToProductList = async (productDetails) => {
        try {
            const { data } = await axios.post(`${CRUDURL}/shopItems`, productDetails)
            setProductArr((prev) => [data, ...prev])
        } catch (error) {
            alert(error);

        }
    }


    /* -------------------------------------------------------------------------- */
    /*                                 ADD TO CART                                */
    /* -------------------------------------------------------------------------- */
    const addToCartList = async (productDetails) => {
        try {
            const { data } = await axios.post(`${CRUDURL}/cartList`, productDetails)
            setCartArr(p => [data, ...p])
        } catch (error) {
            alert(error);
        }
    }



    /* -------------------------------------------------------------------------- */
    /*                                 PLACE ORDER                                */
    /* -------------------------------------------------------------------------- */
    const placeOrder = async () => {
        try {
            // const response = await axios.delete(`${CRUDURL}/cartList`)
            // setCartArr([])
            alert("THERE IS NO WAY TO DELETE THE WHOLE CART LIST SO WE CANNOT DO A PLACE ORDER REQUEST");

        } catch (error) {
            // alert("THERE IS NO WAY TO DELETE THE WHOLE CART LIST SO WE CANNOT DO A PLACE ORDER REQUEST");

        }
    }


    /* -------------------------------------------------------------------------- */
    /*                              DELETE CART ITEM                              */
    /* -------------------------------------------------------------------------- */
    const deleteCartItem = async (productID) => {
        try {
            const response = await axios.delete(`${CRUDURL}/cartList/${productID}`)
            setCartArr(p => {
                return p.filter((cartItem) => {
                    if (cartItem._id !== productID) { return true }
                })
            })
        } catch (error) {

        }
    }



    return (
        <CartContext.Provider value={{ addToProductList, productArr, addToCartList, cartArr, placeOrder, deleteCartItem }}>
            {props.children}
        </CartContext.Provider>
    )
}






export default CartContext