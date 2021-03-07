import React from 'react';
import BubbleCartItem from './../BubbleCartItem';

const BubbleCartList = ({ bubbles}) => (
    <div className="bubblesInCart">
        {bubbles && bubbles.map(b => 
            <BubbleCartItem 
                key={ b.id } 
                //Maybe add decrease amount and increase and remove from cart
                { ...b } 
            /> 
        )}
    </div>
);

export default BubbleCartList;