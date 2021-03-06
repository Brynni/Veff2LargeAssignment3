import React from 'react';
import BubbleCartList from './../BubbleCartList';
import { Redirect } from 'react-router-dom'
import OrderConfirmed from './OrderConfirmed';

export default class ReviewOrder extends React.Component {
    state = {
        loading: true,
        redirect: false,
        bubbles: [],
        userInfo: null
    };

    async componentDidMount() {
        this.setState({loading: false });
        this.setState({redirect: false });
        this.state.userInfo = this.props.location.state.fields;
    };
    
    handleConfirmation = (e) => {
        e.preventDefault();

        return fetch('http://localhost:3500/api/orders/' + this.state.userInfo.phoneNumber, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },

            
            body: JSON.stringify({userInfo: this.state.userInfo, orderInfo: JSON.parse(localStorage.getItem("shoppingCart"))})
        })
        .then(res => { 
            localStorage.removeItem('shoppingCart'); 
            localStorage.setItem('userInfo', JSON.stringify(this.state.userInfo))
            this.setState({ redirect: true });
            return res.ok;
         })
        //.catch(err) => console.log(err));
        
    }

    render() {
        const bubbles = JSON.parse(localStorage.getItem('shoppingCart'));
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : (
                        this.state.redirect ? 
                        <OrderConfirmed state={this.state} />
                        :
                    
                    <div>
                        <div>
                            <h1>Review Order</h1>
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick= {this.handleConfirmation}>Confirm Order
                                
                            </button>
                        </div>
                        
                        <BubbleCartList 
                            bubbles = { bubbles } />    
                    </div>)}
            </div>
        );
    };
}


//onClick= { ()=> this.setState({redirect: true }) }>Confirm Order