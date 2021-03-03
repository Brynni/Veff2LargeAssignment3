import React from 'react';

const BubbleListItem = ({ id, name, description, image, price}) => (
    <div className="card card-body bg-light bubble">
        <div className="bubble-name text-primary"><h3>{ name }</h3></div>
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