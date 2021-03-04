import React from 'react';
import BundleListItem from './../BundeListItem';

const BundleList = ({ bundles }) => (
    <div className="bubbles">
        { bundles.map( b=> <BundleListItem key={ b.id } { ...b } /> ) }
    </div>
);

export default BundleList;