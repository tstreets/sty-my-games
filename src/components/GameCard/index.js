import React from 'react';
import {} from 'semantic-ui-react';
import { Link } from 'gatsby';

const GameCard = ({
    id,
    name,
    company,
    maxPlayers,
    minPlayers,
    age,
    time,
    picName,
    picUrl,
    state,
}) => {
    return (
        <React.Fragment>
            <li className='game-card'>
                <Link to={`/game/${id}`} state={{ ...state }}>
                    <h2>{name}</h2>
                    <h3>{company}</h3>
                    {picName && picUrl ? (
                        <div
                            className='game-card-image'
                            style={{
                                backgroundImage: `url(${picUrl})`,
                            }}
                        />
                    ) : null}
                    <p>Time ({time}mins)</p>
                    <p>Ages {age}+</p>
                    <p>
                        {minPlayers}-{maxPlayers} players
                    </p>
                </Link>
            </li>
        </React.Fragment>
    );
};

export default GameCard;
