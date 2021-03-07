import React from 'react';
import BubbleCartList from './../BubbleCartList';
import { Redirect } from 'react-router-dom'
import PreviousOrders from './PreviousOrders';
import { GetAllOrdersForAUser } from './../../services/cartService/index.js'
import { object } from 'prop-types';

export default class Cart extends React.Component {
    state = {
        loading: true,
        redirect: false,
        getPreviousOrders: false,
        bubbles: []
    };

    async componentDidMount() {    
        this.setState({loading: false, redirect: false, getPreviousOrders: false });
    };
    
    toggle(){
        if (this.state.getPreviousOrders == false)
        {
            this.setState({getPreviousOrders: true })
        }
        else
        {
            this.setState({getPreviousOrders: false })
        }
    }

    updateCart() {
        const bubbles = JSON.parse(localStorage.getItem('shoppingCart'));
        this.setState({bubbles: bubbles});
    }

    render() {
        const { getPreviousOrders } = this.state;
        const bubbles = JSON.parse(localStorage.getItem('shoppingCart'));
        if (this.state.loading) {
            return <div>loading</div>;
        }

        if (this.state.redirect) {
            return <Redirect to='/cart/checkout' />;
        }

        return (
            <>
                <h1>Shopping Cart</h1>
                {getPreviousOrders && <PreviousOrders updateCart={this.updateCart.bind(this)}/>} 
                { !!bubbles ?
                    <>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick= { ()=> this.setState({redirect: true }) }>
                                Proceed to checkout
                        </button>
                            
                        <button
                            type="button"
                            className="btn btn-info"
                            onClick= { ()=> this.toggle() }>
                                View previous orders
                        </button>
                        <h4>The Current Cart</h4>
                        <BubbleCartList bubbles = { bubbles } />
                        
                    </>
                    :
                    <p>Cart is empty!</p>
                }
            </>
        );
    };
}