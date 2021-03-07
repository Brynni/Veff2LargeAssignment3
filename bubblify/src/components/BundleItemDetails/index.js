import React from 'react';
import { getBubbles, getSingleBundle } from '../../services/bundleService';
import BubbleList from '../BubbleList';
import { Redirect } from 'react-router-dom'

class BundleItemDetails extends React.Component {
    state = {
        loading: true,
        bundle: {},
        bubbles: []
    };
    
    async componentDidMount() {
        const bundleId = this.props.match.params.bundleItemId;
        const url = `http://localhost:3500/api/bundles/${bundleId}`; 
        const response = await fetch(url);
        const bundles = await response.json()
        const bubbles = await getBubbles();
        const currBundle = getSingleBundle(bundles, bubbles);
        let bundle = {}
        for (const key of Object.keys(currBundle)) {
             bundle = currBundle[key];
        };
        
        this.setState({ bundle: bundle, bubbles: bubbles,loading: false, });

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
        const { name, bubbles } = this.state.bundle;
        
        if (this.state.redirect) {
            return <Redirect to='/cart/checkout' />;
        }

        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div className="card card-body bg-light bubble">
                    <h3 className="bubble-name text-primary">{ name }</h3>
                    <div className="bubbles"> <BubbleList 
                    bubbles = { bubbles } 
                    addItemToCart = {id => this.addItemToCart(id)}/> </div>
                </div>}
            </div>
        )
    }
};

export default BundleItemDetails;