import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';

import './index.css';
import Navbar from './Navbar';
import Login from '../pages/login';

const Layout = ({ children, user, location: { pathname, hash } }) => {
    const newPathname = pathname
        .replace('/sty-my-games/public', '')
        .concat(hash);

    return (
        <React.Fragment>
            <div className='fullsite'>
                <h1 className='mainheader'>Streets' Games</h1>
                {user ? (
                    <React.Fragment>
                        <Container className='content'>{children}</Container>
                        <Navbar />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Container className='content'>
                            <Login originalPage={newPathname} />
                        </Container>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};

function mapStateToProp({ auth }) {
    return {
        user: auth.user,
    };
}

export default connect(mapStateToProp)(Layout);
