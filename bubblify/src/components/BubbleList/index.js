import React from 'react';
import { PropTypes } from 'prop-types';
import BubbleListItem from './../BubbleListItem';

const BubbleList = ({ bubbles, addItemToCart }) => (
    <div className="bubbles">
        {   bubbles.map( b=> <BubbleListItem 
        key={ b.id } 
        onAddToCart={  addItemToCart } 
        { ...b } /> ) }
    </div>
);

BubbleList.propTypes = {
    // Array of bubbles objects
    bubbles: PropTypes.array.isRequired,
    // Function that adds the item to the cart
    addItemToCart: PropTypes.func.isRequired,


};

export default BubbleList;