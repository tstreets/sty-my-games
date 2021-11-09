import React from 'react';
import { Button, Form, Header, Input } from 'semantic-ui-react';

import FormField from '../components/FormField';
import { addGame } from '../functions/db';

const AddGameForm = () => {
    const initialNewGame = {
        name: '',
        age: 2,
        minPlayers: 1,
        maxPlayers: 2,
        company: '',
    };

    const [newGame, setNewGame] = React.useState(initialNewGame);

    function addNewGame() {
        addGame(newGame);
        setNewGame(initialNewGame);
    }

    function changeNewGame(e, { name, value }) {
        setNewGame({ ...newGame, [name]: value });
    }

    return (
        <React.Fragment>
            <Header className='page-header' as='h1'>
                Add New Game
            </Header>
            <Form>
                <FormField
                    control={Input}
                    name='name'
                    label='Name:'
                    onChange={changeNewGame}
                    value={newGame.name}
                />
                <Form.Group widths='equal'>
                    <FormField
                        control={Input}
                        name='age'
                        label={`Ages ${newGame.age}+`}
                        type='range'
                        min='2'
                        max='19'
                        onChange={changeNewGame}
                        value={newGame.age}
                    />
                    <FormField
                        control={Input}
                        name='minPlayers'
                        label='Min. Players:'
                        onChange={changeNewGame}
                        value={newGame.minPlayers}
                    />
                    <FormField
                        control={Input}
                        name='maxPlayers'
                        label='Max. Players:'
                        onChange={changeNewGame}
                        value={newGame.maxPlayers}
                    />
                </Form.Group>
                <FormField
                    control={Input}
                    name='company'
                    label='Company:'
                    onChange={changeNewGame}
                    value={newGame.company}
                />
                <Form.Field>
                    <Button
                        fluid
                        content='Add Game'
                        icon='plus'
                        color='green'
                        type='button'
                        onClick={addNewGame}
                    />
                </Form.Field>
            </Form>
        </React.Fragment>
    );
};

export default AddGameForm;
