import React from 'react';
import {} from 'semantic-ui-react';

import Menu, { MenuItem } from './Menu';

const Navbar = ({ className, state }) => {
    return (
        <React.Fragment>
            <title>Streets' Games</title>
            <Menu className={className}>
                <MenuItem icon='plus' to='/add' state={state}>
                    Add
                </MenuItem>
                <MenuItem icon='heart' to='/saved' state={state}>
                    Saved
                </MenuItem>
                <MenuItem
                    icon={{ name: 'home', 'aria-label': 'Explore' }}
                    to='/'
                    state={state}
                >
                    Explore
                </MenuItem>
                <MenuItem icon='search' to='/search' state={state}>
                    Search
                </MenuItem>
                <MenuItem icon='percent' to='/stats' state={state}>
                    Stats
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default Navbar;
