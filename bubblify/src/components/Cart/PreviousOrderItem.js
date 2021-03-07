import React from 'react';

const PreviousOrderItem = ({ order, updateCart }) => (
    <div className="bubbles">
        <b>Order</b>
        { order.map( o => 
            <div key={o.id}>
                
                <p>Quantity: {o.quantity}, Name: {o.name} </p>

            </div> 
        )}
        <button
            type="button"
            className="btn btn-primary"
            onClick={ () => {
                localStorage.setItem('shoppingCart', JSON.stringify(order));
                updateCart();
            }}>
                Select order
        </button>
    </div>
);

export default PreviousOrderItem;