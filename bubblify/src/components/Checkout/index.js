import React, { useState } from 'react';
import PickupForm from './PickupForm';
import DeliveryForm from './DeliveryForm'; 
import { Redirect } from 'react-router-dom';

export default class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            redirect: false,
            pickup: false,
            delivery: false,
            infoValid: false,
            fields: {
                name: '',
                address: '',
                telephone: '',
                city: '',
                postalcode: '',
                deliveryMethod: ''
            }
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({ infoValid: true });
    }

    saveInfo = (e) => {
        this.setState({
            fields: {
                ...this.state.fields,
                [e.target.id]: e.target.value
            }
        });
    }

    render(){
        const { pickup, delivery } = this.state;
        if (this.state.infoValid) {
            //TODO send state to review
            return (<Redirect to={{
                pathname: "/cart/checkout/reviewOrder",
                state: {fields:{...this.state.fields}}
            }}/>)
        }

        console.log(this.state);
        return (
            <div className="checkout">
                <h1> Choose prefered handling of bubbles</h1>
                <div className="button-group">
                    <button
                        type="button"
                        className="btn btn-warning btn-lg"
                        onClick={() => {
                            this.setState({ pickup: true, delivery: false, fields:{deliveryMethod:"pickUp"}});
                        }}>
                            Pick up at store
                    </button>
                    <button
                        type="button"
                        className="btn btn-primary btn-lg"
                        onClick={() => {
                            this.setState({ delivery: true, pickup: false, fields:{deliveryMethod:"delivery"}});
                        }}>
                            Have the bubbles delivered
                    </button>
                </div>
                {pickup && <PickupForm handleSubmit={this.handleSubmit} saveInfo={this.saveInfo}/>} 
                {delivery && <DeliveryForm handleSubmit={this.handleSubmit} saveInfo={this.saveInfo}/>}
            </div>
        );
    }
}
