import React from 'react';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';

const Wrapper = () => (
    <Provider store={store}>
        <App></App>
    </Provider>
);

export default Wrapper;
