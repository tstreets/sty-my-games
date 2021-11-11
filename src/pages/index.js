import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header, Loader } from 'semantic-ui-react';

import '../css/styles.css';
import Navbar from '../components/Navbar';
import { getGames } from '../functions/db';
import GameCard from '../components/GameCard';
import GameCardGroup from '../components/GameCard/GameCardGroup';

const Home = ({ location: { state } }) => {
    const { games = [] } = state || {};
    const [allGames, setAllGames] = React.useState(games);
    const [allGamesLoading, setAllGamesLoading] = React.useState(false);

    React.useEffect(() => {
        if (!allGames.length && !allGamesLoading) {
            setAllGamesLoading(true);
            getGames(newAllGames => {
                setAllGames(newAllGames);
                setAllGamesLoading(false);
            });
        }
    }, [setAllGames, setAllGamesLoading, allGamesLoading, allGames]);
    console.count('A');

    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header' as='h1'>
                    Explore
                </Header>

                <GameCardGroup>
                    <Loader active={allGamesLoading} />
                    {allGames.length
                        ? allGames.map((game, i) => {
                              if (!game.id) return null;
                              return (
                                  <React.Fragment key={`game-card-${i}`}>
                                      <GameCard {...game} />
                                  </React.Fragment>
                              );
                          })
                        : null}
                </GameCardGroup>

                <Navbar
                    className='mt-auto'
                    state={{ ...state, games: allGames }}
                />
            </Container>
        </React.Fragment>
    );
};

export default Home;
