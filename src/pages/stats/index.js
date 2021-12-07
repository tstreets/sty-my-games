import React from 'react';
import { connect } from 'react-redux';
import { Segment, Statistic, Loader } from 'semantic-ui-react';

import { getAllGames } from '../../functions/db';
import { setAllGames } from '../../reducers/gamesReducer';

const Stats = ({ setAllGames, allGames }) => {
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
        attemptGetAllGames();
    });

    async function attemptGetAllGames() {
        if (loading || allGames) return;
        setLoading(true);
        try {
            const newAllGames = await getAllGames();
            setAllGames(newAllGames);
        } catch {}
        setLoading(false);
    }

    return (
        <React.Fragment>
            <h2>Stats</h2>
            <Segment>
                {loading ? (
                    <Statistic>
                        <Statistic.Value>
                            <Loader active size='massive' />
                        </Statistic.Value>
                    </Statistic>
                ) : null}
                <Statistic>
                    <Statistic.Label>Total Games</Statistic.Label>
                    <Statistic.Value>-</Statistic.Value>
                </Statistic>
                <Statistic>
                    <Statistic.Label>Total Games</Statistic.Label>
                    <Statistic.Value>-</Statistic.Value>
                </Statistic>
            </Segment>
        </React.Fragment>
    );
};

const mapDispatchToProps = {
    setAllGames,
};

function mapStateToProps({ games }) {
    return {
        allGames: games.allGames,
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
