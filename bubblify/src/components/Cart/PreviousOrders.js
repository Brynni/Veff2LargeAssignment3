import React from 'react';
import { GetAllOrdersForAUser } from './../../services/cartService/index.js'
import PreviousOrderItem from './PreviousOrderItem';

export default class PreviousOrders extends React.Component {
    
    state = {
        usersOrders: []
    }

    async componentDidMount() {    
        let userInfo = JSON.parse(localStorage.getItem('userInfo'));
        if (userInfo)
        {
            const usersOrders = await GetAllOrdersForAUser(userInfo.phoneNumber);
            var tempList = [];
            for (var i = 0; i < usersOrders.length; i++){
                tempList.push(usersOrders[i].orderInfo);
            }
            this.setState({usersOrders:tempList});
        }
        
    };

    render(){
        const {usersOrders} = this.state;
        if (!usersOrders.length)
        {
            return (
                <>
                    <h4> Previous Orders </h4>
                    <p> No userinfo has been registered </p>
                </>
            )
        }
        else {
            return (
                <>
                    <h4> Previous Orders</h4>
                    {usersOrders.map( order=> <PreviousOrderItem key={order.id} order={order} updateCart={this.props.updateCart}/>)}
                </>
            )
        }
    }
}
//.map( item => <p>{item.name}</p>)