import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

import GameCard from '../components/GameCard';
import { getAllGames } from '../functions/db';

import { setAllGames } from '../reducers/gamesReducer';

const Home = ({ allGames, setAllGames }) => {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        attemptGetAllGames();
    });

    async function attemptGetAllGames() {
        if (loading || allGames) return;
        setLoading(true);
        try {
            const newAllGames = await getAllGames();
            setAllGames(newAllGames);
        } catch {}
        setLoading(false);
    }

    function reloadGames() {
        if (loading) return;
        setAllGames(null);
    }

    const sortedGames = allGames
        ? allGames.sort(() => {
              return Math.random() > 0.5 ? 1 : -1;
          })
        : [];

    return (
        <React.Fragment>
            <h2>Explore</h2>
            <Button
                style={{ position: 'fixed', top: '10%', right: '20px' }}
                color='purple'
                icon='sync'
                onClick={reloadGames}
                size='small'
                aria-label='Reload Games'
                content='Reload Games'
            />
            <GameCard.Group>
                {allGames && allGames.length ? (
                    sortedGames.map((g, i) => {
                        return (
                            <GameCard
                                key={`game-card-${i}-${g.id}`}
                                game={g}
                            ></GameCard>
                        );
                    })
                ) : allGames ? (
                    <p>Sorry, no games available.</p>
                ) : (
                    <p>Please wait while the games are loading</p>
                )}
            </GameCard.Group>
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    setAllGames,
};

function mapStateToProps({ games }) {
    return {
        allGames: games.allGames,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
