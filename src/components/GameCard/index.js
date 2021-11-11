import React from 'react';
import { Image } from 'semantic-ui-react';
import {} from 'gatsby';

const GameCard = ({
    name,
    company,
    maxPlayers,
    minPlayers,
    age,
    time,
    picName,
    picUrl,
}) => {
    return (
        <React.Fragment>
            <li className='game-card'>
                <h2>{name}</h2>
                <h3>{company}</h3>
                {picName && picUrl ? <Image src={picUrl} size='small' /> : null}
                <p>Time ({time}mins)</p>
                <p>Ages {age}+</p>
                <p>
                    {minPlayers}-{maxPlayers} players
                </p>
            </li>
        </React.Fragment>
    );
};

export default GameCard;
