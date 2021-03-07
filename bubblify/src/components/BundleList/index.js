import React from 'react';
import BundleListItem from './../BundeListItem';
import { PropTypes } from 'prop-types';

const BundleList = ({ bundles, addItemToCart }) => (
    <div className="bubbles">
        { bundles.map( b=> <BundleListItem key={ b.id } { ...b }
                                            addItemToCart = { addItemToCart } /> ) }
    </div>
);


BundleList.propType = {
    // Bundles are an array of objects
    bundles: PropTypes.arrayOf(PropTypes.object).IsRequired,
    // The function to add the bubbles to the Cart
    addItemToCart: PropTypes.func.IsRequired,
}

export default BundleList;