import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let name = [];
    for(const id of cart){
        name = name + id.strMeal;
    }

    return (
        <div className='cart'>
            <h2>Order Summary</h2>
            <h4>Select Item: {cart.length}</h4>
           <ol>
                {
                    cart.map(id => <li>{id.strMeal.slice(0, 19)}</li>)
                }
           </ol>
        </div>
    );
};

export default Cart;