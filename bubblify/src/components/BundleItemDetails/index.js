import React from 'react';
import { getBubbles, getSingleBundle } from '../../services/bundleService';
import BubbleList from '../BubbleList';

class BundleItemDetails extends React.Component {
    state = {
        loading: true,
        bundle: {},
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
        

        this.setState({ bundle: bundle, loading: false });

    };

    render() {
        console.log(this.state.bundle);
        const { name, bubbles } = this.state.bundle;
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div className="card card-body bg-light bubble">
                    <h3 className="bubble-name text-primary">{ name }</h3>
                    <div className="bubbles"> <BubbleList bubbles = { bubbles } /> </div>
                </div>}
            </div>
        )
    }
};

export default BundleItemDetails;