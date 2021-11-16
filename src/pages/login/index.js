import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';

import '../../css/styles.css';
import Navbar from '../../components/Navbar';

import app from 'gatsby-plugin-firebase-v9.0';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();
const auth = getAuth(app);
auth.languageCode = 'it';

provider.setCustomParameters({
    login_hint: 'user@example.com',
});

const Login = ({ location: { state } }) => {
    function signIn() {
        signInWithPopup(auth, provider)
            .then(result => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // ...

                console.log(token, user);
            })
            .catch(error => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
                // ...
                console.log(errorCode, errorMessage);
            });
    }

    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header'>Login</Header>
                <button onClick={signIn} children='Login' />
                <Navbar className='mt-auto' state={{ ...state }} />
            </Container>
        </React.Fragment>
    );
};

export default Login;
