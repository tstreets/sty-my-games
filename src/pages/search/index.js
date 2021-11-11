import React from 'react';
import 'semantic-ui-css/semantic.css';
import { Container, Header, Loader } from 'semantic-ui-react';

import '../../css/styles.css';
import Navbar from '../../components/Navbar';
import { getGames } from '../../functions/db';

import GameCard from '../../components/GameCard';
import GameCardGroup from '../../components/GameCard/GameCardGroup';
import SearchForm from '../../search/SearchForm';

const Search = ({ location: { state } }) => {
    const { games = [] } = state || {};
    const [allGames, setAllGames] = React.useState(games);
    const [allGamesLoading, setAllGamesLoading] = React.useState(false);

    const initialFilters = {
        name: '',
        age: 2,
        minPlayers: 0,
        maxPlayers: 10,
        company: '',
        time: 5,
    };
    const [filters, setFilters] = React.useState(initialFilters);

    React.useEffect(() => {
        if (!allGames.length && !allGamesLoading) {
            setAllGamesLoading(true);
            getGames(newAllGames => {
                setAllGames(newAllGames);
                setAllGamesLoading(false);
            });
        }
    }, [setAllGames, setAllGamesLoading, allGamesLoading, allGames]);

    const filtersGames = allGames
        ? allGames.filter(
              ({ name, company, age, minPlayers, maxPlayers, time }) => {
                  if (
                      filters.name &&
                      !name.toLowerCase().includes(filters.name.toLowerCase())
                  ) {
                      return false;
                  }
                  if (filters.age > 2 && Number(filters.age) > Number(age)) {
                      return false;
                  }
                  if (
                      filters.company &&
                      !company
                          .toLowerCase()
                          .includes(filters.company.toLowerCase())
                  ) {
                      return false;
                  }
                  if (
                      maxPlayers &&
                      (!(filters.minPlayers <= minPlayers) ||
                          !(filters.maxPlayers >= maxPlayers))
                  ) {
                      return false;
                  }
                  if (filters.time > 5 && Number(filters.time) > Number(time)) {
                      return false;
                  }
                  return true;
              }
          )
        : [];

    return (
        <React.Fragment>
            <Container className='fullsite'>
                <Header className='page-header' as='h1'>
                    Search
                </Header>

                <SearchForm filters={filters} setFilters={setFilters} />

                <GameCardGroup>
                    <Loader active={allGamesLoading} />
                    {filtersGames.length
                        ? filtersGames.map((game, i) => {
                              if (!game.id) return null;
                              return (
                                  <React.Fragment key={`game-card-${i}`}>
                                      <GameCard {...game} />
                                  </React.Fragment>
                              );
                          })
                        : null}
                </GameCardGroup>

                <Navbar
                    className='mt-auto'
                    state={{ ...state, games: allGames }}
                />
            </Container>
        </React.Fragment>
    );
};

export default Search;
