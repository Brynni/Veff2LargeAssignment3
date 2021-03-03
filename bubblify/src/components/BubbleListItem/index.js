import React from 'react';
import { Link } from 'react-router-dom';

const BubbleListItem = ({ id, name, description, image, price}) => (
    <div className="card card-body bg-light bubble">
        <h3 className="bubble-name text-primary"><Link to={`/bubbles/${id}`}>{name}</Link></h3>
        <div className="img">
            <img src= { image } />
        </div>
        <div className ="price">
            <h4>Price : { price }</h4>
        </div>
        <div className="description"><p>{ description }</p></div>
    </div>
);

export default BubbleListItem;