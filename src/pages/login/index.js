import { Link } from 'gatsby';
import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import { loginUser } from '../../functions/db';

const Login = ({ location: { state }, user, setUser }) => {
    const [loading, setLoading] = React.useState(false);

    async function attemptLogin() {
        if (loading) return;
        setLoading(true);
        try {
            const { email, displayName } = await loginUser();
            if (email) {
                setUser({
                    email,
                    displayName,
                });
            }
        } catch {}
        setLoading(false);
    }

    return (
        <React.Fragment>
            {!user ? (
                <Button onClick={attemptLogin}>Login</Button>
            ) : (
                <React.Fragment>
                    <Link to={state?.originalPage || '/'}>
                        <Button>Return to App!</Button>
                    </Link>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    setUser(newUser) {
        return { type: 'authUserLogin', user: newUser };
    },
};

function mapStateToProp({ auth }) {
    return {
        user: auth.user,
    };
}

export default connect(mapStateToProp, mapDispatchToProps)(Login);
