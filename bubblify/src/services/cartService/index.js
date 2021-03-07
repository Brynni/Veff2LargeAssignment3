import * as constants from '../urlConstants';

export function cartPrompt(bubbleName) {
    if (window.confirm(`${bubbleName} has been added to cart! Proceed to checkout?!`)) {
        this.setState({redirect: true });
    } 
};

export function addItemToCart(id) {
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


export const GetAllOrdersForAUser = async(telephone) => {
    const result = await fetch(constants.ORDERS+telephone);
    if(!result.ok) { return []; }
    return result.json();
}