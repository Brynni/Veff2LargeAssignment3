import React from 'react';
import BubbleList from './../BubbleList';

export default class Bubbles extends React.Component {
    state = {
        loading: true,
        bubbles: [],
    };

    async componentDidMount() {
        const url = "http://localhost:3500/api/bubbles";
        const response = await fetch(url);
        const data = await response.json()
        this.setState({ bubbles: data });
        this.setState({loading: false });
    };

    render() {
        const { bubbles } = this.state;
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div>
                        <BubbleList bubbles = { bubbles } />    
                    </div>}
            </div>
        );
    };
}