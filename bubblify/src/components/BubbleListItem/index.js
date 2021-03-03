import React from 'react';

const BubbleListItem = ({ id, bubbleName, description, coverImg}) => (
    <div className="bubble">
        <div className="bubble-name"><h3>{ bubbleName }</h3></div>
        <div className="img" style={{ backgroundImage: `url(${coverImg})` }}></div>
        <div className="description"><p>{ description }</p></div>
    </div>
);

export default BubbleListItem;