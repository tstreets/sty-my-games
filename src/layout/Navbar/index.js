import React from 'react';
import { Link } from 'gatsby';
import { Icon } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { setUser } from '../../reducers/authReducer';

const NavLink = ({ icon, children, content, to, noLink, handler }) => {
    const stringIcon = typeof icon === 'string';
    const text = children || content;

    function doNothing() {}

    const LinkContent = () => {
        return (
            <React.Fragment>
                {stringIcon ? (
                    <Icon aria-label={text} name={icon} />
                ) : (
                    <Icon aria-label={text} {...icon} />
                )}
                <span>{text}</span>
            </React.Fragment>
        );
    };

    return (
        <React.Fragment>
            <li onClick={handler || doNothing}>
                {noLink ? (
                    <a href={to}>
                        <LinkContent />
                    </a>
                ) : (
                    <Link to={to}>
                        <LinkContent />
                    </Link>
                )}
            </li>
        </React.Fragment>
    );
};

const Navbar = ({ setUser, user }) => {
    return (
        <React.Fragment>
            <nav className='mainnav'>
                <ul>
                    {user ? (
                        <NavLink icon='plus' to='/add'>
                            Add
                        </NavLink>
                    ) : null}
                    <NavLink icon='home' to='/'>
                        Explore
                    </NavLink>
                    <NavLink icon='search' to='/'>
                        Search
                    </NavLink>
                    <NavLink icon='percent' to='/stats'>
                        Stats
                    </NavLink>
                    {!user ? (
                        <NavLink icon='user' to='/login'>
                            Login
                        </NavLink>
                    ) : (
                        <NavLink noLink icon='x' handler={() => setUser(null)}>
                            Logout
                        </NavLink>
                    )}
                </ul>
            </nav>
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    setUser,
};

function mapStateToProps({ auth }) {
    return {
        user: auth.user,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
