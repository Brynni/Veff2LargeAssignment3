import React from 'react';

export default class Bubbles extends React.Component {
    state = {
        loading: true,
    };

    async componentDidMount() {
        const url = "http://localhost:3500/api/bubbles";
        const response = await fetch(url);
        const data = await response.json()
        console.log(data);
    };

    render() {
        return (
            <div>
                {this.state.loading ? <div>loading</div> : <div>loaded</div>}
            </div>
        );
    };
}