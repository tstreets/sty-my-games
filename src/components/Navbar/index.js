import React from 'react';
import {} from 'semantic-ui-react';

import Menu, { MenuItem } from './Menu';

const Navbar = ({ className, state }) => {
    return (
        <React.Fragment>
            <Menu className={className}>
                <MenuItem icon='home' to='/' state={state}>
                    Explore
                </MenuItem>
                <MenuItem icon='plus' to='/add' state={state}>
                    Add
                </MenuItem>
                <MenuItem icon='heart' to='/saved' state={state}>
                    Saved
                </MenuItem>
                <MenuItem icon='search' to='/search' state={state}>
                    Search
                </MenuItem>
            </Menu>
        </React.Fragment>
    );
};

export default Navbar;
