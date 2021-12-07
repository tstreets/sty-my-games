import React from 'react';
import { Link } from 'gatsby';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';

const EditGame = ({ location: { hash } }) => {
    const splitHash = hash.split('/');
    return (
        <React.Fragment>
            <h1>Edit Game</h1>
            <Link to={`/game#/${splitHash[1]}`}>
                <Button>Go Back</Button>
            </Link>
        </React.Fragment>
    );
};

const mapDispatchToProps = {};

function mapStateToProps({ auth }) {
    return {
        user: auth.user,
        isAdmin: auth.isAdmin,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditGame);
