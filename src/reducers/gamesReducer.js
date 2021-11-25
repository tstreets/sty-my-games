const initialState = {
    allGames: null,
    currentGame: null,
    mechanics: null,
};

export function setMechanics(mechanics) {
    return { type: 'gamesSetMechanics', mechanics };
}

export function setCurrentGame(currentGame) {
    return { type: 'gamesSetCurrentGame', currentGame };
}

export function setAllGames(allGames) {
    return { type: 'gamesSetAllGames', allGames };
}

function gamesReducer(state = initialState, action) {
    switch (action.type) {
        case 'gamesSetMechanics':
            return {
                ...state,
                mechanics: action.mechanics,
            };
        case 'gamesSetCurrentGame':
            return {
                ...state,
                currentGame: action.currentGame,
            };
        case 'gamesSetAllGames':
            return {
                ...state,
                allGames: action.allGames,
            };
        default:
            return state;
    }
}

export default gamesReducer;
