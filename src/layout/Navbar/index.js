const React = require('react');
const { Link } = require('gatsby');
const { Icon } = require('semantic-ui-react');

const NavLink = ({ icon, children, content, to, state }) => {
    const stringIcon = typeof icon === 'string';
    const text = children || content;

    return (
        <React.Fragment>
            <li>
                <Link to={to} state={state}>
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

const Navbar = ({ state }) => {
    return (
        <React.Fragment>
            <nav className='mainnav'>
                <ul>
                    <NavLink icon='plus' to='/add' state={state}>
                        Add
                    </NavLink>
                    {/* <NavLink icon='saved' to='/'>
                        Saved
                    </NavLink> */}
                    <NavLink icon='home' to='/' state={state}>
                        Explore
                    </NavLink>
                    <NavLink icon='search' to='/'>
                        Search
                    </NavLink>
                    <NavLink icon='percent' to='/' state={state}>
                        Stats
                    </NavLink>
                </ul>
            </nav>
        </React.Fragment>
    );
};

module.exports = Navbar;
