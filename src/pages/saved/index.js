import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';

import '../../css/styles.css';
import Navbar from '../../components/Navbar';

const Saved = ({ location: { state } }) => {
    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header' as='h1'>
                    Saved
                </Header>
                <Navbar className='mt-auto' state={state} />
            </Container>
        </React.Fragment>
    );
};

export default Saved;
