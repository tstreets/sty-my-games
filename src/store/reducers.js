import { combineReducers } from 'redux';

import authReducer from '../reducers/authReducer';
import gamesReducer from '../reducers/gamesReducer';

const reducers = combineReducers({
    auth: authReducer,
    games: gamesReducer,
});

export default reducers;
