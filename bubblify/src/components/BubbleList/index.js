import React from 'react';
import BubbleListItem from './../BubbleListItem';

const BubbleList = ({ bubbles, addItemToCart }) => (
    <div className="bubbles">
        {   bubbles.map( b=> <BubbleListItem 
        key={ b.id } 
        onAddToCart={  addItemToCart } 
        { ...b } /> ) }
    </div>
);

export default BubbleList;