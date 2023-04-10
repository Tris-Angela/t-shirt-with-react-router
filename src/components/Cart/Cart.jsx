import React from 'react';

const Cart = ({cart, removeHandler}) => {
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
           {
            cart.map(pd => <p key={pd._id}>{pd.name} <button onClick={() => removeHandler(pd._id)}>X</button></p>)
           }
        </div>
    );
};

export default Cart;