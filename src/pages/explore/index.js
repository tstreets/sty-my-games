import React from 'react';
import {} from 'semantic-ui-react';

import GameCard from '../../components/GameCard';

const Home = ({ location: { state } }) => {
    console.log(state);
    return (
        <React.Fragment>
            <h2>Explore</h2>
            <GameCard.Group>
                <GameCard state={state}></GameCard>
            </GameCard.Group>
        </React.Fragment>
    );
};

export default Home;
