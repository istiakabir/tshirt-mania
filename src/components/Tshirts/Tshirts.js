import React from 'react';
import './Tshirts.css'

const Tshirts = ({handleToAddCart, tshirts}) => {
    const {name, picture, price} = tshirts;

    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleToAddCart(tshirts)}>Add To Cart</button>
        </div>
    );
};

export default Tshirts;