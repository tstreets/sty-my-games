import React from 'react';
import {} from 'semantic-ui-react';

const GameCardGroup = ({ children }) => {
    return (
        <React.Fragment>
            <div className='game-card-group'>{children}</div>
        </React.Fragment>
    );
};

export default GameCardGroup;
