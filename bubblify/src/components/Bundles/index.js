import React from 'react';
import BundleList from './../BundleList';
import { getBubbleBundles, getBubbles } from '../../services/bundleService';
import { Redirect } from 'react-router-dom'

export default class Bundles extends React.Component {
    state = {
        loading: true,
        redirect: false,
        bundles: [],
        bubbles: []
    };

    async componentDidMount() {
        const bundles = await getBubbleBundles();
        const bundlesArr = [];
        for (const key of Object.keys(bundles)) {
            bundlesArr.push(bundles[key]);
        };
        const bubbles = await getBubbles();

        this.setState({ bundles: bundlesArr, loading: false, bubbles: bubbles});

    };


      cartPrompt(bubbleName) {
        if (window.confirm(`${bubbleName} has been added to cart! Proceed to checkout?!`)) {
            this.setState({redirect: true });
        } 
    };
    
     addItemToCart(id) {
        let shoppingCart = localStorage.getItem('shoppingCart');
        let myBubbles = this.state.bubbles.filter(n => n.id === id);
        myBubbles[0].quantity = 1;
        console.log(myBubbles);
        let stringifiedBubbles =  JSON.stringify(myBubbles);
        if (shoppingCart === null)
        {
            localStorage.setItem('shoppingCart', stringifiedBubbles);
        }
        else {
            let shoppingCartObject = JSON.parse(shoppingCart);
            let itemFound = false;
            for (let key in shoppingCartObject) {
                if (shoppingCartObject[key].id === id)
                {
                    shoppingCartObject[key].quantity++;
                    itemFound = true; 
                }
            }
            if (itemFound === false){
                shoppingCartObject.push(myBubbles[0]);
            }
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartObject));
    
    
            
        }
        this.cartPrompt(myBubbles[0].name);
      };

    

    render() {
        const { bundles } = this.state;
        
        if (this.state.redirect) {
            return <Redirect to='/cart/checkout' />;
        }

        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div>
                        <BundleList bundles= { bundles } 
                        addItemToCart={ id => this.addItemToCart(id) }/>    
                    </div>}
            </div>
        );
    };
}