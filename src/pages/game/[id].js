import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header } from 'semantic-ui-react';

import '../../css/styles.css';
import Navbar from '../../components/Navbar';
import GameCard from '../../components/GameCard';

const GameId = ({ location: { state }, id }) => {
    // console.log(id);
    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header' as='h1'>
                    Game Name
                </Header>

                {state && state.game ? <GameCard {...state.game} /> : null}

                <Navbar className='mt-auto' state={{ ...state }} />
            </Container>
        </React.Fragment>
    );
};

export default GameId;
