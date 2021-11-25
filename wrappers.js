import React from 'react';
import { Provider } from 'react-redux';

import Layout from './src/layout';
import getStore from './src/store';

export const wrapPageElement = ({ element, props }) => {
    return <Layout {...props}>{element}</Layout>;
};

export const wrapRootElement = ({ element }) => {
    const store = getStore();
    return <Provider store={store}>{element}</Provider>;
};
