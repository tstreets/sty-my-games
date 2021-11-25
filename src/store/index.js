import { createStore } from 'redux';

import reducers from './reducers';

const getStore = () => createStore(reducers);

export default getStore;
