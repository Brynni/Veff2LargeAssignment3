import React from 'react';
import { Link } from 'react-router-dom';

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

export default BubbleListItem;