import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';

import AddGameForm from '../add/AddGameForm';

const Home = () => {
    return (
        <React.Fragment>
            <Container style={{ padding: '24px 0' }}>
                <AddGameForm />
            </Container>
        </React.Fragment>
    );
};

export default Home;
