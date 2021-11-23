import React from 'react';
import { Input, Form, Button, Select, TextArea } from 'semantic-ui-react';
import GamePreview from '../../components/Add/GamePreview';

import WizardForm from '../../components/WizardForm';
import { getGameSearch, getMechanics } from '../../functions/atlas';
import { addGame } from '../../functions/db';

const Add = ({ location: { state } }) => {
    const initialGame = {
        name: '',
        company: '',
        mechanics: [],
        minPlayers: 0,
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
    const [mechanics, setMechanics] = React.useState(state?.mechanics || null);
    const [mechanicsLoading, setMechanicsLoading] = React.useState(false);
    const [searchResults, setSearchResults] = React.useState([]);
    const [customMechanics, setCustomMechanics] = React.useState([]);
    const [addingGame, setAddingGame] = React.useState(false);
    const [isScrollDown, setIsScrollDown] = React.useState(true);

    React.useState(() => {
        if (!mechanics && !mechanicsLoading) {
            getAllMechanics();
        }
    });

    async function getAllMechanics() {
        setMechanicsLoading(true);
        const newMechanics = await getMechanics();
        storeMechanics(newMechanics);
        setMechanics(newMechanics);
        setMechanicsLoading(false);
    }

    function storeMechanics(newMechanics) {
        if (typeof window !== 'undefined') {
            localStorage.state = JSON.stringify({
                ...(state || {}),
                mechanics: newMechanics,
            });
        }
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
                user: state.user,
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
            <WizardForm fluid onDone={attemptAddGame}>
                <WizardForm.Header isWizardFormHeader>
                    Add New Game
                </WizardForm.Header>
                <WizardForm.Page isWizardFormPage>
                    <WizardForm.Header isWizardFormHeader>
                        Base Info
                    </WizardForm.Header>
                    <Form.Field>
                        <label htmlFor='name'>Name</label>
                        <Input
                            id='name'
                            name='name'
                            value={game.name}
                            onChange={changeGame}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='company'>Company</label>
                        <Input
                            id='company'
                            name='company'
                            value={game.company}
                            onChange={changeGame}
                        />
                    </Form.Field>
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
                            content={`To ${isScrollDown ? 'Bottom' : 'Top'}`}
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

                    <Form.Field>
                        <label htmlFor='name'>Name</label>
                        <Input
                            id='name'
                            name='name'
                            value={game.name}
                            onChange={changeGame}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='company'>Company</label>
                        <Input
                            id='company'
                            name='company'
                            value={game.company}
                            onChange={changeGame}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='description'>Description</label>
                        <TextArea
                            id='description'
                            name='description'
                            value={game.description || ''}
                            onChange={changeGame}
                        />
                    </Form.Field>
                    <Form.Field>
                        <label htmlFor='mechanics'>Game Mechanics</label>
                        <Select
                            id='mechanics'
                            name='mechanics'
                            value={game.mechanics}
                            onChange={changeGame}
                            options={mechanicsOptions}
                            multiple
                            clearable
                            search
                            selectOnBlur={false}
                            allowAdditions
                            onAddItem={addGameMechanic}
                        />
                    </Form.Field>
                </WizardForm.Page>
            </WizardForm>
        </React.Fragment>
    );
};

export default Add;
