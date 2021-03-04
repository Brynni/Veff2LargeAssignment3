import React from 'react';
import BundleList from './../BundleList';
import { getBubbleBundles, getBubbles } from '../../services/bundleService';

export default class Bundles extends React.Component {
    state = {
        loading: true,
        bundles: [],
            
    };

    async componentDidMount() {
        const bundles = await getBubbleBundles();
        const bundlesArr = [];
        for (const key of Object.keys(bundles)) {
            bundlesArr.push(bundles[key]);
        };

        this.setState({ bundles: bundlesArr, loading: false, });

    };

    render() {
        const { bundles } = this.state;
        console.log(this.state);
        return (
            <div>
                {this.state.loading ? 
                    <div>loading</div> 
                    : <div>
                        <BundleList bundles= { bundles } />    
                    </div>}
            </div>
        );
    };
}