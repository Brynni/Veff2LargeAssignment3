import React from 'react';
import BubbleList from '../BubbleList';

const BundleListItem  = ({ id, name, bubbles}) => (
    <div className="card card-body bg-light bubble">
        <h3 className="bubble-name text-primary">{name}</h3>
        <div>
            <BubbleList bubbles={ bubbles } />
        </div>

    </div>
);

export default BundleListItem;