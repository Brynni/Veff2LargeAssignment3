import React from 'react';
import BundleListItem from './../BundeListItem';

const BundleList = ({ bundles, addItemToCart }) => (
    <div className="bubbles">
        { bundles.map( b=> <BundleListItem key={ b.id } { ...b }
                                            addItemToCart = { addItemToCart } /> ) }
    </div>
);

export default BundleList;