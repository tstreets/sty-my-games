import { Link } from 'gatsby';
import React from 'react';
import { Button } from 'semantic-ui-react';

import { loginUser } from '../../functions/db';

const Login = ({ location: { state } }) => {
    const [user, setUser] = React.useState(null);
    const [userLoading, setUserLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    async function attemptLogin() {
        if (userLoading) return;
        setUserLoading(true);
        try {
            const { email, displayName } = await loginUser();
            if (!email) {
                setError(`Login Failed: No email found`);
                return;
            }
            if (error) setError('');
            setUser({
                email,
                displayName,
            });
        } catch {
            setError('Login Failed');
        }
        setUserLoading(false);
    }

    return (
        <React.Fragment>
            {error ? <p style={{ color: 'red' }}>{error}</p> : null}
            {!user ? (
                <Button onClick={attemptLogin}>Login</Button>
            ) : (
                <React.Fragment>
                    <Link
                        to={state?.lastPage || '/'}
                        state={{ ...(state || {}), user }}
                    >
                        <Button>Go Explore!</Button>
                    </Link>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

export default Login;
