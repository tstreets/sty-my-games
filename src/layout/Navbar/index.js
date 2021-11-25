import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'semantic-ui-react';

const NavLink = ({ icon, children, content, to }) => {
    const stringIcon = typeof icon === 'string';
    const text = children || content;

    return (
        <React.Fragment>
            <li>
                <Link to={to}>
                    {stringIcon ? (
                        <Icon aria-label={text} name={icon} />
                    ) : (
                        <Icon aria-label={text} {...icon} />
                    )}
                    <span>{text}</span>
                </Link>
            </li>
        </React.Fragment>
    );
};

const Navbar = () => {
    return (
        <React.Fragment>
            <nav className='mainnav'>
                <ul>
                    <NavLink icon='plus' to='/add'>
                        Add
                    </NavLink>
                    {/* <NavLink icon='saved' to='/'>
                        Saved
                    </NavLink> */}
                    <NavLink icon='home' to='/'>
                        Explore
                    </NavLink>
                    <NavLink icon='search' to='/'>
                        Search
                    </NavLink>
                    <NavLink icon='percent' to='/'>
                        Stats
                    </NavLink>
                </ul>
            </nav>
        </React.Fragment>
    );
};

export default Navbar;
