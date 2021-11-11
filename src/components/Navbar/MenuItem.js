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
            <li className='text-light-side navbar-link'>
                <Link
                    className='text-light-side navbar-link'
                    to={to ? to : '/'}
                    state={state}
                >
                    {icon ? <Icon {...iconProps} /> : null}
                    <span>{children || content}</span>
                </Link>
            </li>
        </React.Fragment>
    );
};

export default MenuItem;
