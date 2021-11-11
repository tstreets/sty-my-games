import React from 'react';
import { Button, Form, Header, Image, Input } from 'semantic-ui-react';

import FormField from '../components/FormField';
import { addGame } from '../functions/db';

const AddGameForm = () => {
    const initialNewGame = {
        name: '',
        age: 2,
        minPlayers: 1,
        maxPlayers: 2,
        company: '',
        time: 0,
    };

    const [newGame, setNewGame] = React.useState(initialNewGame);
    const [pic, setPic] = React.useState(null);

    React.useEffect(() => {
        if (pic && pic.file && !pic.src) {
            startPicSrcLoad();
        }
    });

    function addNewGame() {
        try {
            addGame(newGame, pic);
            setNewGame(initialNewGame);
            setPic(null);
        } catch (e) {
            console.warn(`Error adding game: ${e}`);
        }
    }

    function changeNewGame(e, { name, value }) {
        setNewGame({ ...newGame, [name]: value });
    }

    function changePic(e) {
        const currentFile = e.target.files[0];

        setPic({
            file: currentFile || null,
            name: currentFile.name || '',
            src: null,
        });
    }

    function getPicSrc() {
        return new Promise((res, rej) => {
            try {
                const fr = new FileReader();
                fr.onload = function () {
                    res(this.result);
                };
                fr.readAsDataURL(pic.file);
            } catch (e) {
                rej(e);
            }
        });
    }

    async function startPicSrcLoad() {
        try {
            const src = await getPicSrc();
            setPic({ ...pic, src });
        } catch (e) {
            console.warn(e);
        }
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
                        name='time'
                        label={`Time (${newGame.time}mins)`}
                        type='range'
                        min='5'
                        max='120'
                        step='5'
                        onChange={changeNewGame}
                        value={newGame.time}
                    />
                    <FormField
                        control={Input}
                        name='age'
                        label={`Ages ${newGame.age}+`}
                        type='range'
                        min='2'
                        max='19'
                        step='1'
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
                <FormField
                    control={Input}
                    name='pic'
                    label='Picture:'
                    onChange={changePic}
                    type='file'
                    accept='image/*'
                />
                {pic && pic.file ? (
                    <React.Fragment>
                        <Form.Field>
                            <label>Picture Preview</label>
                            <Image src={pic.src} size='medium' />
                        </Form.Field>
                    </React.Fragment>
                ) : null}
                <Form.Field>
                    <Button
                        fluid
                        content='Add Game'
                        icon='plus'
                        className='bg-dark text-light-side'
                        type='button'
                        circular
                        onClick={addNewGame}
                    />
                </Form.Field>
            </Form>
        </React.Fragment>
    );
};

export default AddGameForm;
