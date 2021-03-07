import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const BubbleListItem = ({ id, name, description, image, price, onAddToCart}) => (
    <div className="card card-body bg-light bubble">
        <h3 className="bubble-name text-primary"><Link to={`/bubbles/${id}`}>{name}</Link></h3>
        <div className="img">
            <img src={ image } alt="cart item"/>
        </div>
        <div className ="price">
            <h4>Price : { price }</h4>
        </div>
        <div className="description"><p>{ description }</p></div>
        <div className="button-group">
            <button
                type="button"
                className="btn btn-primary"
                onClick={ () => onAddToCart(id) }>Add to cart</button>
        </div>
        
    </div>
);

BubbleListItem.propTypes = {
    // The ID is a must have
    id: PropTypes.number.isRequired,
    // We need to have the name of the product we want to sell
    name: PropTypes.string.isRequired,
    // Description of the product is reccomended but not nessecary
    description: PropTypes.string,
    // Image is must usefull but not a must
    image: PropTypes.string,
    // Price is a must, the customer must know how much our product costs
    price: PropTypes.number.isRequired,
    // This is required so we can add the product to the cart
    onAddToCart: PropTypes.func.isRequired,



};


export default BubbleListItem;