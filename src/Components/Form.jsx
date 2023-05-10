import React, { useContext, useState } from 'react';
import CartContext from '../Context/CartContext';


function Form(props) {

    const cartCTX = useContext(CartContext)


    const [name, setName] = useState("")
    const [desc, setdesc] = useState("")
    const [price, setprice] = useState("")

    const [l, setL] = useState(false)
    const [m, setM] = useState(false)
    const [s, setS] = useState(false)



    const onBtnClick = () => {
        const productData = {
            name: name, desc: desc, price: price, l: l, m: m, s: s
        }
        cartCTX.addToProductList(productData)
        setName("")
        setdesc("")
        setprice("")
        setL(false)
        setM(false)
        setS(false)
    }


    return (
        <div className=' Form-div '>
            <input value={name} onChange={(e) => { setName(e.target.value) }} type="text" name="" id="" placeholder='Name' />
            <input value={desc} onChange={(e) => { setdesc(e.target.value) }} type="text" name="" id="" placeholder='Description' />
            <input value={price} onChange={(e) => { setprice(e.target.value) }} type="text" name="" id="" placeholder='price' />

            <span>L</span>
            <input checked={l} onChange={() => { setL(p => !p) }} type="Checkbox" name="" id="" />
            <span>M</span>
            <input checked={m} onChange={() => { setM(p => !p) }} type="Checkbox" name="" id="" />
            <span>S</span>
            <input checked={s} onChange={() => { setS(p => !p) }} type="Checkbox" name="" id="" />

            <button onClick={onBtnClick}>ADD</button>

        </div>
    );
}

export default Form;
