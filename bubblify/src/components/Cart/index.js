import React from 'react';
import BubbleCartList from './../BubbleCartList';
import { Redirect } from 'react-router-dom'

export default class Cart extends React.Component {
    state = {
        loading: true,
        redirect: false,
        bubbles: [],
    };

    async componentDidMount() {
        const url = "http://localhost:3500/api/bubbles";
        const response = await fetch(url);
        const data = await response.json()
        this.setState({ bubbles: data });
        this.setState({loading: false });
        this.setState({redirect: false });
        console.log(this.state);
    };
    
    render() {
        const bubbles = JSON.parse(localStorage.getItem('shoppingCart'));
        console.log(bubbles);
        console.log(this.state);
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : (
                        this.state.redirect ? 
                        <Redirect to='/checkout' />
                        :
                    
                    <div>
                        <div>
                            <h1>Shopping Cart</h1>
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick= { ()=> this.setState({redirect: true }) }>Proceed to checkout
                            </button>
                        </div>
                        
                        <BubbleCartList 
                            bubbles = { bubbles } />    
                    </div>)}
            </div>
        );
    };
}