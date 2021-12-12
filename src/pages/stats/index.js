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

    const initialStats = {
        total: 0,
        mechanics: [],
    };

    const stats = !allGames
        ? initialStats
        : allGames.reduce((acc, g) => {
              return {
                  total: acc.total + 1,
                  mechanics: [...acc.mechanics, ...g.mechanics],
              };
          }, initialStats);

    const popMechs = stats.mechanics
        .reduce((acc, m) => {
            if (acc.find(me => me.name === m)) return acc;
            const { length } = stats.mechanics.filter(me => me === m);
            return [...acc, { name: m, count: length }];
        }, [])
        .sort((a, b) => (a.count < b.count ? 1 : -1));

    return (
        <React.Fragment>
            <h2>Stats</h2>
            <Segment textAlign='center'>
                {loading ? (
                    <Statistic>
                        <Statistic.Value>
                            <Loader active size='massive' />
                        </Statistic.Value>
                    </Statistic>
                ) : null}
                <Statistic>
                    <Statistic.Label>Total Games</Statistic.Label>
                    <Statistic.Value>
                        {Number(stats.total) ? stats.total : '-'}
                    </Statistic.Value>
                </Statistic>
                {popMechs.flatMap((m, i) => {
                    if (i > 2) return [];
                    return (
                        <React.Fragment key={`pop-mech-${i}-${Date.now()}`}>
                            <Statistic>
                                <Statistic.Label>
                                    Popular Mechanic {i + 1}
                                </Statistic.Label>
                                <Statistic.Value text>{m.name}</Statistic.Value>
                            </Statistic>
                        </React.Fragment>
                    );
                })}
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
