import React from 'react';

class BubbleItemDetails extends React.Component {
    state = {
        loading: true,
        bubble: {},
    };
    
    async componentDidMount() {
        const bubbleId = this.props.match.params.bubbleItemId;
        const url = `http://localhost:3500/api/bubbles/${bubbleId}`;
        
        const response = await fetch(url);
        const data = await response.json()
        this.setState({ bubble: data });
        this.setState({loading: false });
    };

    render() {
        const { name, description, price, image } = this.state.bubble;
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div className="card card-body bg-light bubble">
                    <h3 className="bubble-name text-primary">{name}</h3>
                    <div className="img">
                        <img src={ image } alt="cart item"/>
                    </div>
                    <div className ="price">
                        <h4>Price : { price }</h4>
                    </div>
                    <div className="description"><p>{ description }</p></div>
                </div>}
            </div>
        )
    }
};

export default BubbleItemDetails;