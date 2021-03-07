import React from 'react';
import BubbleList from '../BubbleList';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';

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

PropTypes.BundleListItem = {
    // The ID is required so that we can identify different bundles
    id: PropTypes.number.isRequired,
    // The name of the bundle should be a string and is mandatory
    name: PropTypes.string.isRequired,
    // Every bundle must contain an array of bubbles so that it can be a bundle
    bubbles: PropTypes.arrayOf(PropTypes.objects).isRequired,
    // The function to add the bubbles to cart
    addItemToCart: PropTypes.func.isRequired,
}

export default BundleListItem;