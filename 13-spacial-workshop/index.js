/*
    This file is the entry for the
    Webpack system to bundle all
    into a nice app :)
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import App from './App';

// Import base styles so we don't mind about the rest
import 'bootstrap/dist/css/bootstrap.min.css';

// This is necessary to the app reload without refreshing the whole page
const HotApp = hot(() => (
    // This will enforce better practices, see: https://reactjs.org/docs/strict-mode.html
    <React.StrictMode>
        <App />
    </React.StrictMode>
));

// Get our App.jsx and mount it all into the #debakatas div
ReactDOM.render(<HotApp />, document.getElementById('debakatas'));
