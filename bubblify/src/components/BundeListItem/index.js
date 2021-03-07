import React from 'react';
import BubbleList from '../BubbleList';
import { Link } from 'react-router-dom';

const BundleListItem  = ({ id, name, bubbles, addItemToCart}) => (
    <div className="card card-body bg-light bubble">
        <h3 className="bubble-name text-primary">
        <Link to={`/bundles/${id}`}>{name}</Link></h3>
        <div>
            <BubbleList bubbles={ bubbles } 
            addItemToCart={ id => addItemToCart(id) } />
        </div>

    </div>
);

export default BundleListItem;