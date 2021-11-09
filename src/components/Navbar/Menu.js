import React from 'react';
import {} from 'semantic-ui-react';

import Item from './MenuItem';

const Menu = ({ children, className }) => {
    return (
        <React.Fragment>
            <nav className={className}>
                <ul
                    className='bg-dark'
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        height: '48px',
                        alignItems: 'center',
                        fontSize: '24px',
                    }}
                >
                    {children}
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default Menu;
export const MenuItem = Item;
