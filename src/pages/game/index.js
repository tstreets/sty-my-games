import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { Button, Grid, Header } from 'semantic-ui-react';

import { getGame, checkAdmin } from '../../functions/db';
import { setCurrentGame } from '../../reducers/gamesReducer';
import { setIsAdmin } from '../../reducers/authReducer';

const Game = ({
    location: { hash },
    allGames,
    currentGame,
    setCurrentGame,
    user,
    isAdmin,
    setIsAdmin,
}) => {
    const splitHash = hash.split('/');
    const [loading, setLoading] = React.useState(false);

    React.useState(() => {
        attemptGetGame();
        attemptCheckAdmin();
    });

    async function attemptCheckAdmin() {
        if (loading || !user || typeof isAdmin === 'boolean') return;
        setLoading(true);
        try {
            const newIsAdmin = await checkAdmin(user);
            setIsAdmin(newIsAdmin || false);
        } catch {
            setIsAdmin(false);
        }
        setLoading(false);
    }

    async function attemptGetGame() {
        if (loading || currentGame || allGames) return;
        setLoading(true);
        try {
            const newGame = await getGame(splitHash[1]);
            setCurrentGame(newGame);
        } catch {}
        setLoading(false);
    }

    const displayGame = currentGame
        ? currentGame
        : allGames
        ? allGames.find(g => g.id === splitHash[1])
        : null;

    return (
        <React.Fragment>
            <Grid>
                {user && isAdmin ? (
                    <Grid.Row>
                        <Grid.Column>
                            <Link to={`/game/edit#/${splitHash[1]}`}>
                                <Button
                                    content='Edit Game'
                                    icon='pencil'
                                    color='orange'
                                />
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                ) : null}
                {displayGame && displayGame.id ? (
                    <React.Fragment>
                        <Grid.Row columns='1'>
                            <Grid.Column>
                                <Header as='h2'>{displayGame.name}</Header>
                            </Grid.Column>
                            <Grid.Column>
                                <p>{displayGame.description}</p>
                            </Grid.Column>
                            <Grid.Column>
                                <div
                                    className='gameinfo-image'
                                    style={{
                                        backgroundImage: `url(${displayGame.backupImage})`,
                                    }}
                                    role='img'
                                    aria-label={displayGame.name}
                                ></div>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns='2'>
                            <Grid.Column>
                                <p>
                                    <span>Time:</span> {displayGame.minPlaytime}{' '}
                                    - {displayGame.maxPlaytime} mins
                                </p>
                            </Grid.Column>
                            <Grid.Column>
                                <p>
                                    <span>Players:</span>{' '}
                                    {displayGame.minPlayers} -{' '}
                                    {displayGame.maxPlayers}
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row columns='1'>
                            <Grid.Column>
                                <ul className='gameinfo-taglist'>
                                    {displayGame.mechanics.map((m, i) => {
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
                ) : !displayGame && currentGame ? (
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

const mapDispatchToProps = {
    setCurrentGame,
    setIsAdmin,
};

function mapStateToProps({ games, auth }) {
    return {
        currentGame: games.currentGame,
        allGames: games.allGames,
        isAdmin: auth.isAdmin,
        user: auth.user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
