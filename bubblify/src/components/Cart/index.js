import React from 'react';
import BubbleCartList from './../BubbleCartList';
import { Redirect } from 'react-router-dom'

export default class Cart extends React.Component {
    state = {
        loading: true,
        redirect: false,
        bubbles: []
    };

    async componentDidMount() {    
        this.setState({loading: false });
        this.setState({redirect: false });
        console.log(this.state);
    };
    
    render() {
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
                { !!bubbles ?
                    <>
                        <button
                            type="button"
                            className="btn btn-danger"
                            onClick= { ()=> this.setState({redirect: true }) }>
                                Proceed to checkout
                        </button>
                            
                        <BubbleCartList bubbles = { bubbles } />
                    </>
                    :
                    <p>Cart is empty!</p>
                }
            </>
        );
    };
}