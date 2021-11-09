import React from 'react';
import { Container, Header } from 'semantic-ui-react';

import '../css/styles.css';
import Navbar from '../components/Navbar';

const NotFound = ({ location: { state } }) => {
    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header' as='h1'>
                    Page Not Found
                </Header>
                <Navbar className='mt-auto' state={state} />
            </Container>
        </React.Fragment>
    );
};

export default NotFound;
