import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const {cart, removeToCart} = props;
    const { name, picture, price } =cart;


    return (
        <div className='cart-container'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <button onClick={() => removeToCart(cart)}>X</button>

           


        </div>
    );
};

export default Cart;