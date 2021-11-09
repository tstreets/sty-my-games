import React from 'react';
import {} from 'semantic-ui-react';
import {} from 'gatsby';

const GameCard = ({ name, company, maxPlayers, minPlayers, age }) => {
    return (
        <React.Fragment>
            <li className='game-card'>
                <h2>{name}</h2>
                <h3>{company}</h3>
                <p>Ages {age}+</p>
                <p>
                    {minPlayers}-{maxPlayers} players
                </p>
            </li>
        </React.Fragment>
    );
};

export default GameCard;
