import React from 'react';
import { Grid, Header } from 'semantic-ui-react';

import { getGame } from '../../functions/db';

const Game = ({ location: { hash, state } }) => {
    const { allGames = [] } = state;

    const splitHash = hash.split('/');
    const gameRef = splitHash.length
        ? allGames.find(g => g.id === splitHash[1])
        : null;
    const [game, setGame] = React.useState(gameRef || null);
    const [gameLoading, setGameLoading] = React.useState(false);

    React.useState(() => {
        attemptGetGame();
    });

    async function attemptGetGame() {
        if (gameLoading || game) return;
        setGameLoading(true);
        try {
            const newGame = await getGame(splitHash[1]);
            setGame(newGame);
        } catch {}
        setGameLoading(false);
    }
    return (
        <React.Fragment>
            <Grid>
                {game && game.id ? (
                    <React.Fragment>
                        <Grid.Row columns='1'>
                            <Grid.Column>
                                <Header as='h2'>{game.name}</Header>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{game.description}</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div
                                    className='gameinfo-image'
                                    style={{
                                        backgroundImage: `url(${game.backupImage})`,
                                    }}
                                    role='img'
                                    aria-label={game.name}
                                ></div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns='2'>
                            <Grid.Column>
                                <p>
                                    <span>Time:</span> {game.minPlaytime} -{' '}
                                    {game.maxPlaytime} mins
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    <span>Players:</span> {game.minPlayers} -{' '}
                                    {game.maxPlayers}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns='1'>
                            <Grid.Column>
                                <ul className='gameinfo-taglist'>
                                    {game.mechanics.map((m, i) => {
                                        return (
                                            <li
                                                key={`game-tag-${i}`}
                                                className='gameinfo-tag'
                                            >
                                                {m}
                                            </li>
                                        );
                                    })}
                                </ul>
                            </Grid.Column>
                        </Grid.Row>
                    </React.Fragment>
                ) : !game ? (
                    <React.Fragment>
                        <Grid.Column>
                            <p>No Game Found</p>
                        </Grid.Column>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <Grid.Column>
                            <p>Searching For Game...</p>
                        </Grid.Column>
                    </React.Fragment>
                )}
            </Grid>
        </React.Fragment>
    );
};

export default Game;
