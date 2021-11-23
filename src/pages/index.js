import React from 'react';
import {} from 'semantic-ui-react';

import GameCard from '../components/GameCard';
import { getAllGames } from '../functions/db';

const Home = ({ location: { state } }) => {
    const [allGames, setAllGames] = React.useState(state.allGames || null);
    const [allGamesLoading, setAllGamesLoading] = React.useState(false);

    React.useEffect(() => {
        attemptGetAllGames();
    });

    async function attemptGetAllGames() {
        if (allGamesLoading || allGames) return;
        setAllGamesLoading(true);
        try {
            const newAllGames = await getAllGames();
            setAllGames(newAllGames);
        } catch {}
        setAllGamesLoading(false);
    }

    console.log(allGames);

    return (
        <React.Fragment>
            <h2>Explore</h2>
            <GameCard.Group>
                {allGames && allGames.length ? (
                    allGames.map((g, i) => {
                        return (
                            <GameCard
                                key={`game-card-${i}-${g.id}`}
                                game={g}
                                state={{ ...(state || {}), allGames: allGames }}
                            ></GameCard>
                        );
                    })
                ) : (
                    <p>Sorry, no games available.</p>
                )}
            </GameCard.Group>
        </React.Fragment>
    );
};

export default Home;
