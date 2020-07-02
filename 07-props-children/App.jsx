import React from 'react';
import './style.css';
import { Provider } from 'react-redux';
import Agnes from './Agnes';
import store from './redux/store';

const App = () => (
    <Provider store={store}>
        <ul>
            <Agnes />
        </ul>
    </Provider>
);

export default App;
