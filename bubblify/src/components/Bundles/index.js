import React from 'react';
//import BundleList from './../BundleList';

export default class Bundles extends React.Component {
    state = {
        loading: true,
        bundles: [],
        bubbles: [],
    };

    async componentDidMount() {
        const urlBundles = "http://localhost:3500/api/bundles";
        const urlBubbles = "http://localhost:3500/api/bubbles";
        const responseBundle = await fetch(urlBundles);
        const repsonseBubble = await fetch(urlBubbles);
        const bundles = await responseBundle.json();
        const bubbles = await repsonseBubble.json();
        this.setState({bundles: bundles, bubbles: bubbles, loading: false,})
    };

    render() {
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div>
                        loaded <div/>    
                    </div>}
            </div>
        );
    };
}