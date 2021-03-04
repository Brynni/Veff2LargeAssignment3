import React from 'react';
import { Redirect } from 'react-router-dom'
import BubbleList from './../BubbleList';

export default class Bubbles extends React.Component {
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
        console.log(this.state);
    };

    cartPrompt(bubbleName) {
        if (window.confirm(`${bubbleName} has been added to cart! Proceed to checkout?!`)) {
            this.setState({redirect: true });
        } 
    }

    addItemToCart(id) {
        let shoppingCart = localStorage.getItem('shoppingCart');
        console.log(shoppingCart);
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
                    console.log(shoppingCartObject[key].quantity);
                    itemFound = true; 
                }
            }
            if (itemFound === false){
                console.log(shoppingCart);
                console.log(typeof(shoppingCartObject))
                shoppingCartObject.push(myBubbles[0]);
            }
            localStorage.setItem('shoppingCart', JSON.stringify(shoppingCartObject));


            
        }
        this.cartPrompt(myBubbles[0].name);
      }
    

    render() {
        const { bubbles } = this.state;
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : (
                        this.state.redirect ? 
                        <Redirect to='/cart' />
                        :
                        <div>
                            <BubbleList 
                                bubbles = { bubbles } 
                                addItemToCart={ id => this.addItemToCart(id) } 
                                />    
                        </div>
                    )}
            </div>
            
        );
    };
}