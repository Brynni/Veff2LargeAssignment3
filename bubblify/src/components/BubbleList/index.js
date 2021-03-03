import React from 'react';
import BubbleListItem from './../BubbleListItem';

const BubbleList = ({ bubbles }) => (
    <div className="bubbles">
        { bubbles.map( b=> <BubbleListItem key={ b.id } { ...b } /> ) }
    </div>
);

export default BubbleList;