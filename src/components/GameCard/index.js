import React from 'react';
import { Link } from 'gatsby';
import { Header } from 'semantic-ui-react';

export const GameCardGroup = ({ children, content }) => {
    return (
        <React.Fragment>
            <ul>{children || content}</ul>
        </React.Fragment>
    );
};

const GameCard = ({ game }) => {
    const tags = {
        list: [],
        count: 0,
    };

    game.mechanics.forEach(m => {
        if (tags.count + m.length < 48) {
            tags.list.push(m);
            tags.count += m.length;
        }
    });

    const descString = game.description
        ? game.description
              .split('')
              .filter((a, i) => i < 150)
              .join('')
        : '';

    const finalString =
        descString.length < game.description.length
            ? `${descString}...`
            : descString.length
            ? descString
            : 'No description';

    return (
        <React.Fragment>
            <li className='gamecard'>
                <Link to={`/game#/${game.id}`}>
                    <Header className='gamecard-header' as='h3'>
                        {game.name}
                    </Header>
                    <p className='gamecard-text'>{finalString}</p>
                    <div
                        className='gamecard-image'
                        role='img'
                        aria-label={game.name}
                        style={{ backgroundImage: `url(${game.backupImage})` }}
                    />
                </Link>
                <ul className='gamecard-otherinfo'>
                    {/* 64 is max char length */}
                    {tags.list.map((t, i) => {
                        return (
                            <li
                                className='gamecard-tag'
                                key={`game-card-tag-${i}`}
                            >
                                {t}
                            </li>
                        );
                    })}
                </ul>
            </li>
        </React.Fragment>
    );
};

GameCard.Group = GameCardGroup;

export default GameCard;
