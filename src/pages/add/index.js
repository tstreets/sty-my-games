import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';

import '../../css/styles.css';
import AddGameForm from '../../add/AddGameForm';
import Navbar from '../../components/Navbar';

const Add = ({ location: { state } }) => {
    return (
        <React.Fragment>
            <Container className='fullsite'>
                <AddGameForm />
                <Navbar className='mt-auto' state={state} />
            </Container>
        </React.Fragment>
    );
};

export default Add;
