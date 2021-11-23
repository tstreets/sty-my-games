import React from 'react';
import { Button, Header } from 'semantic-ui-react';

const GamePreview = ({
    id,
    description_preview,
    image_url,
    max_players,
    min_players,
    max_playtime,
    min_playtime,
    mechanics,
    min_age,
    name,
    publisher,
    year_published,
    mechanicsRef,
    toggleSelectGame,
    selectedGame,
}) => {
    const mechanicsList = mechanicsRef.filter(m =>
        mechanics.find(mech => mech.id === m.id)
    );

    function selectGame() {
        toggleSelectGame(
            id,
            {
                id,
                description: description_preview,
                maxPlayers: max_players,
                minPlayers: min_players,
                maxPlaytime: max_playtime,
                minPlaytime: min_playtime,
                backupImage: image_url,
                minAge: min_age,
                year: year_published,
            },
            mechanicsList
        );
    }

    const mechanicsP = mechanicsList.map((m, i) => {
        return <React.Fragment key={`mech-${i}`}>{m.name}, </React.Fragment>;
    });

    const color = selectedGame.id === id ? 'red' : null;
    const text = selectedGame.id === id ? 'Unselect' : 'Select';

    return (
        <React.Fragment>
            <Header as='h3'>{name}</Header>
            <p>{description_preview || 'No description'}</p>
            <p>
                Players: {min_players} - {max_players}
            </p>
            <p>
                Playtime: {min_playtime} - {max_playtime}
            </p>
            <p>Ages {min_age}+</p>
            <p>Company: {publisher}</p>
            <p>Mechanics: {mechanicsP}</p>
            <Button
                size='tiny'
                content={text}
                onClick={selectGame}
                color={color}
            />
        </React.Fragment>
    );
};

export default GamePreview;
