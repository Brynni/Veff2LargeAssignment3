import React from 'react';
import BubbleList from '../BubbleList'

class BubbleItemDetails extends React.Component {
    state = {
        loading: true,
        bubbles: [],
    };
    
    async componentDidMount() {
        const bubbleId = this.props.match.params.bubbleItemId;
        const url = `http://localhost:3500/api/bubbles/${bubbleId}`;     
        const response = await fetch(url);
        const data = await response.json()
        this.setState({ bubbles: [data] });
        this.setState({loading: false });
    };

    cartPrompt(bubbleName) {
        if (window.confirm(`${bubbleName} has been added to cart! Proceed to checkout?!`)) {
            this.setState({redirect: true });
        } 
    }

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
      }

    render() {
        const { bubbles } = this.state;
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : 
                    <div>
                    <BubbleList 
                        bubbles = { bubbles } 
                        addItemToCart={ id => this.addItemToCart(id) } 
                        />    
                </div>  }
            </div>
        )
        
    }
};

export default BubbleItemDetails;