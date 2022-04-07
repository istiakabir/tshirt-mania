import React, { useState } from 'react';
import useTshirts from '../../hooks/useTshirts';
import Cart from '../Cart/Cart';
import Tshirts from '../Tshirts/Tshirts';
import './Home.css'

const Home = () => {

    const [tshirts, setTshirts] = useTshirts()
    const [cart, setCart] = useState([])

    const handleToAddCart = (selectedProduct) => {
        const exists = cart.find(tshirt => tshirt._id === selectedProduct._id);
        if(!exists){
            const newCart = [...cart, selectedProduct]
            setCart(newCart);
        }

        else{
            alert('Hey! TShirt Already Added')
        }

        
        
    };
    const removeToCart = selectedProduct => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedProduct._id)
        setCart(rest);
    }

   

    return (
        <div className='home-container'>
            <div className="tshirts-container">
                {
                    tshirts.map(tshirt => <Tshirts
                    key={tshirt._id}
                    tshirts ={tshirt}
                    handleToAddCart ={handleToAddCart}
                    ></Tshirts>)
                }
            
            </div>
            <div className="cart-container">
                <h2>Cart</h2>

            {
                cart.map(cart => <Cart
                key ={cart._id}
                cart ={cart}
                removeToCart={removeToCart}
                ></Cart>)
            }
                
                
            </div>
        </div>
    );
};

export default Home;