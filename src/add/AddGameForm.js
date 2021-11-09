import React from 'react';
import { Button, Form, Header, Input } from 'semantic-ui-react';

import FormField from '../components/FormField';
import { addGame } from '../functions/db';

const AddGameForm = () => {
    const [newGame, setNewGame] = React.useState({});

    function addNewGame() {
        addGame(newGame);
        setNewGame({});
    }

    function changeNewGame(e, { name, value }) {
        setNewGame({ ...newGame, [name]: value });
    }

    return (
        <React.Fragment>
            <Header>Add New Game</Header>
            <Form>
                <FormField
                    control={Input}
                    name='name'
                    label='Name:'
                    onChange={changeNewGame}
                />
                <Form.Group widths='equal'>
                    <FormField
                        control={Input}
                        name='age'
                        label='Ages #+'
                        type='range'
                        min='2'
                        max='19'
                        onChange={changeNewGame}
                    />
                    <FormField
                        control={Input}
                        name='minPlayers'
                        label='Min. Players:'
                        onChange={changeNewGame}
                    />
                    <FormField
                        control={Input}
                        name='maxPlayers'
                        label='Max. Players:'
                        onChange={changeNewGame}
                    />
                </Form.Group>
                <FormField
                    control={Input}
                    name='company'
                    label='Company:'
                    onChange={changeNewGame}
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
