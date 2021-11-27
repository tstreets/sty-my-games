import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container } from 'semantic-ui-react';

import './index.css';
import Navbar from './Navbar';

const Layout = ({ children }) => {
    return (
        <React.Fragment>
            <div className='fullsite'>
                <h1 className='mainheader'>Streets' Games</h1>
                <Container className='content'>{children}</Container>
                <Navbar />
            </div>
        </React.Fragment>
    );
};

export default Layout;
