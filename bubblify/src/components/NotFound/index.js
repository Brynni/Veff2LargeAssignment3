import React from 'react';

const NotFound = ({ location }) => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <p>The resource at { location.pathname } was not found.</p>
        </div>
    );
}

export default NotFound;