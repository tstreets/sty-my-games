import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { Form, Button, Select, TextArea } from 'semantic-ui-react';
import GamePreview from '../../components/Add/GamePreview';

import WizardForm from '../../components/WizardForm';
import FormField from '../../components/FormField';
import { getGameSearch, getMechanics } from '../../functions/atlas';
import { addGame, checkAdmin } from '../../functions/db';
import { setMechanics } from '../../reducers/gamesReducer';
import { setIsAdmin } from '../../reducers/authReducer';

const Add = ({ setMechanics, mechanics, user, isAdmin, setIsAdmin }) => {
    const initialGame = {
        name: '',
        company: '',
        mechanics: [],
        minPlayers: 1,
        maxPlayers: 10,
        minPlaytime: 5,
        maxPlaytime: 15,
        minAge: 3,
        description: '',
        id: 0,
        backupImage: '',
        year: '',
    };

    const [game, setGame] = React.useState(initialGame);
    const [mechanicsLoading, setMechanicsLoading] = React.useState(false);
    const [loading, setLoading] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const [customMechanics, setCustomMechanics] = React.useState([]);
    const [addingGame, setAddingGame] = React.useState(false);
    const [isScrollDown, setIsScrollDown] = React.useState(true);

    React.useEffect(() => {
        if (!mechanics && !mechanicsLoading) {
            getAllMechanics();
        }
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

    async function getAllMechanics() {
        setMechanicsLoading(true);
        try {
            const newMechanics = await getMechanics();
            setMechanics(newMechanics);
        } catch {}
        setMechanicsLoading(false);
    }

    async function getCloseGameSearch() {
        if (!game.name) return;
        const newSearchResults = await getGameSearch(game.name);
        setSearchResults(newSearchResults);
    }

    function changeGame(e, { name, value }) {
        setGame({ ...game, [name]: value });
        if (searchResults.length) setSearchResults([]);
    }

    function addGameMechanic(e, { value }) {
        setCustomMechanics([...customMechanics, { name: value }]);
    }

    function toggleSelectGame(gameId, newGame, mechanicsList) {
        if (game.id === gameId) {
            setGame({
                ...initialGame,
                name: game.name,
                company: game.company,
            });
        } else {
            setGame({
                ...game,
                ...newGame,
                mechanics: mechanicsList.map(m => m.name),
            });
        }
        setCustomMechanics([]);
    }

    async function attemptAddGame() {
        if (!game.id || addingGame) return;
        setAddingGame(true);
        try {
            const gameData = { ...game };
            delete gameData.id;
            const newId = await addGame({
                gameData: gameData,
                user: user,
            });
            if (newId) {
                setGame(initialGame);
                setSearchResults([]);
            }
        } catch {}
        setAddingGame(false);
    }

    function scrollPage() {
        setIsScrollDown(!isScrollDown);
        const contentRef = document.querySelector('.content');
        const newTop = isScrollDown ? contentRef.scrollHeight : 0;
        contentRef.scrollTo({ top: newTop, behavior: 'smooth' });
    }

    const mechanicsOptions = mechanics
        ? [...customMechanics, ...mechanics].map(m => ({
              text: m.name,
              value: m.name,
          }))
        : [];

    return (
        <React.Fragment>
            {user && isAdmin ? (
                <WizardForm fluid onDone={attemptAddGame}>
                    <WizardForm.Header isWizardFormHeader>
                        Add New Game
                    </WizardForm.Header>
                    <WizardForm.Page isWizardFormPage>
                        <WizardForm.Header isWizardFormHeader>
                            Base Info
                        </WizardForm.Header>
                        <FormField
                            name='name'
                            label='Name'
                            value={game.name}
                            onChange={changeGame}
                        />
                        <FormField
                            name='company'
                            label='Company'
                            value={game.company}
                            onChange={changeGame}
                        />
                    </WizardForm.Page>
                    <WizardForm.Page isWizardFormPage>
                        <WizardForm.Header isWizardFormHeader>
                            Search More Details
                        </WizardForm.Header>
                        <Button
                            type='button'
                            icon='search'
                            content='Search Game'
                            onClick={getCloseGameSearch}
                        />
                        {searchResults.map((g, i) => {
                            return (
                                <GamePreview
                                    key={`game-preview-${i}`}
                                    {...g}
                                    mechanicsRef={mechanics}
                                    toggleSelectGame={toggleSelectGame}
                                    selectedGame={game}
                                />
                            );
                        })}
                        {searchResults.length > 3 && game.id ? (
                            <Button
                                content={`To ${
                                    isScrollDown ? 'Bottom' : 'Top'
                                }`}
                                icon={`arrow ${isScrollDown ? 'down' : 'up'}`}
                                circular
                                color='blue'
                                style={{
                                    position: 'fixed',
                                    bottom: '20%',
                                    left: '75%',
                                }}
                                onClick={scrollPage}
                            />
                        ) : null}
                    </WizardForm.Page>
                    <WizardForm.Page isWizardFormPage>
                        <WizardForm.Header isWizardFormHeader>
                            Finalize Details
                        </WizardForm.Header>
                        {/* 
                            maxPlaytime: max_playtime || 15,
                            minPlaytime: min_playtime || 5,
                            year: year_published || '',
                        */}
                        <FormField
                            label='Name'
                            name='name'
                            value={game.name}
                            onChange={changeGame}
                        />
                        <FormField
                            label='Company'
                            name='company'
                            value={game.company}
                            onChange={changeGame}
                        />
                        <FormField
                            control={TextArea}
                            label='Description'
                            name='description'
                            value={game.description}
                            onChange={changeGame}
                        />
                        <Form.Group unstackable widths='3'>
                            <FormField
                                label='Min. Age'
                                name='minAge'
                                value={game.minAge}
                                onChange={changeGame}
                                input={{
                                    type: 'number',
                                    min: 3,
                                    max: 21,
                                    step: 1,
                                }}
                            />
                            <FormField
                                label='Min. Players'
                                name='minPlayers'
                                value={game.minPlayers}
                                onChange={changeGame}
                                input={{
                                    type: 'number',
                                    min: 1,
                                    max: 10,
                                    step: 1,
                                }}
                            />
                            <FormField
                                label='Max. Players'
                                name='maxPlayers'
                                value={game.maxPlayers}
                                onChange={changeGame}
                                input={{
                                    type: 'number',
                                    min: 1,
                                    max: 10,
                                    step: 1,
                                }}
                            />
                        </Form.Group>

                        <Form.Group unstackable widths='3'>
                            <FormField
                                label='Year'
                                name='year'
                                value={game.year}
                                onChange={changeGame}
                            />
                            <FormField
                                label='Min. Playtime'
                                name='minPlaytime'
                                value={game.minPlaytime}
                                onChange={changeGame}
                                input={{
                                    type: 'number',
                                    min: 5,
                                    max: 240,
                                    step: 5,
                                }}
                            />
                            <FormField
                                label='Max. Playtime'
                                name='maxPlaytime'
                                value={game.maxPlaytime}
                                onChange={changeGame}
                                input={{
                                    type: 'number',
                                    min: 5,
                                    max: 240,
                                    step: 5,
                                }}
                            />
                        </Form.Group>
                        <FormField
                            control={Select}
                            name='mechanics'
                            label='Game Mechanics'
                            value={game.mechanics}
                            onChange={changeGame}
                            select={{
                                options: mechanicsOptions,
                                multiple: true,
                                clearable: true,
                                search: true,
                                selectOnBlur: false,
                                allowAdditions: true,
                                onAddItem: addGameMechanic,
                            }}
                        />
                    </WizardForm.Page>
                </WizardForm>
            ) : (
                <React.Fragment>
                    {user ? <p>You don't have access</p> : null}
                    <p>
                        <Link to={user ? '/' : '/login'}>
                            <Button>
                                {user ? 'Go Back Home' : 'Go Login'}
                            </Button>
                        </Link>
                    </p>
                </React.Fragment>
            )}
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    setMechanics,
    setIsAdmin,
};

function mapStateToProps({ games, auth }) {
    return {
        mechanics: games.mechanics,
        user: auth.user,
        isAdmin: auth.isAdmin,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Add);
