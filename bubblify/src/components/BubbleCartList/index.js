import React from 'react';
import BubbleCartItem from './../BubbleCartItem';

const BubbleCartList = ({ bubbles}) => (
    <div className="bubblesInCart">
        {bubbles.map(b => 
            <BubbleCartItem 
                key={ b.id } 
                //Maybe add decrease amount and increase and remove from cart
                //onAddToCart={  addItemToCart } 
                { ...b } 
            /> 
        )}
    </div>
);

export default BubbleCartList;