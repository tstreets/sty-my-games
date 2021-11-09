import React from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'gatsby';

const MenuItem = ({ icon, children, content, to, state }) => {
    const iconProps =
        typeof icon === 'string'
            ? {
                  name: icon,
              }
            : icon;
    return (
        <React.Fragment>
            <Link to={to ? to : '/'} state={state}>
                <li className='text-light-side navbar-link'>
                    {icon ? <Icon {...iconProps} /> : null}
                    <span>{children || content}</span>
                </li>
            </Link>
        </React.Fragment>
    );
};

export default MenuItem;
