const React = require('react');
require('semantic-ui-css/semantic.css');
const { Container, Button } = require('semantic-ui-react');
const { Link } = require('gatsby');

require('./index.css');
const Navbar = require('./Navbar');

const Layout = ({ children, location }) => {
    const { state, pathname, hash } = location;
    let storedState = {};
    if (typeof window !== 'undefined') {
        const rawStoredState = localStorage.state;
        if (rawStoredState) {
            storedState = JSON.parse(rawStoredState);
        }
    }

    const pathnameArr = pathname.split('/');
    const newPathname = pathnameArr[pathnameArr.length - 1];

    const newState = {
        ...storedState,
        ...(state || {}),
        lastPage: `${newPathname}${hash}`,
    };

    return (
        <React.Fragment>
            <div className='fullsite'>
                <h1 className='mainheader'>Streets' Games</h1>
                {newState.user && newState.user.email ? (
                    <React.Fragment>
                        <Container className='content'>{children}</Container>
                        <Navbar state={newState} />
                    </React.Fragment>
                ) : pathname.includes('login') ? (
                    <React.Fragment>
                        <Container className='content'>{children}</Container>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Container className='content'>
                            <Link state={newState} to='/login'>
                                <Button>Go to Login Page</Button>
                            </Link>
                        </Container>
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>
    );
};

module.exports = Layout;
