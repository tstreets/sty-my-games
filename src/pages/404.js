import React from 'react';
import {} from 'semantic-ui-react';
import { Link } from 'gatsby';

const NotFound = ({ location: { state } }) => {
    return (
        <React.Fragment>
            <h1>Page Not Found</h1>
            <Link to='/' state={state}>
                Go back home
            </Link>
        </React.Fragment>
    );
};

export default NotFound;
