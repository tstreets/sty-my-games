import { Link } from 'gatsby';
import React from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.css';
import { Container, Header, Button } from 'semantic-ui-react';

import './index.css';
import Navbar from './Navbar';

const Layout = ({ children, user, location: { pathname, hash } }) => {
    const newPathname = pathname
        .replace('/sty-my-games/public', '')
        .concat(hash);

    return (
        <React.Fragment>
            <div className='fullsite'>
                <h1 className='mainheader'>Streets' Games</h1>
                {pathname.includes('login') ? (
                    <React.Fragment>
                        <Container className='content'>{children}</Container>
                    </React.Fragment>
                ) : user ? (
                    <React.Fragment>
                        <Container className='content'>{children}</Container>
                        <Navbar />
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Container className='content'>
                            <Header as='h2'>
                                Login for access to this page
                            </Header>
                            <Link
                                to='/login'
                                state={{ originalPage: newPathname }}
                            >
                                <Button>Go to Login Page</Button>
                            </Link>
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
