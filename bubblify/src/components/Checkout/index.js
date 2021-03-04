import React, { useState } from 'react';
import PickupForm from './PickupForm';
import DeliveryForm from './DeliveryForm'; 

const Checkout = () => {
    const [pickup, setPickup] = useState(false);
    const [delivery, setDelivery] = useState(false);
    
    return (
        <div className="checkout">
            <h1> Choose prefered handling of bubbles</h1>
            <div className="button-group">
                <button
                    type="button"
                    className="btn btn-warning btn-lg"
                    onClick={() => {
                        setPickup(true);
                        setDelivery(false);
                    }}>
                        Pick up at store
                </button>
                <button
                    type="button"
                    className="btn btn-primary btn-lg"
                    onClick={() => {
                        setDelivery(true);
                        setPickup(false);
                    }}>
                        Have the bubbles delivered
                </button>
            </div>
            {pickup && <PickupForm/>} 
            {delivery && <DeliveryForm/>}
        </div>
    );
}

export default Checkout;