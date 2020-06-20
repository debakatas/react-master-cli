import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import Agency from './Agency';
import Home from './Home';

const App = () => (
    <HashRouter>
        <div className="app">
            <NavBar />

            <main>
                <Switch>
                    <Route component={Home} path="/" exact />
                    <Route component={Agency} path="/agency/:nombreAgencia" />
                </Switch>
            </main>
        </div>
    </HashRouter>
);

export default App;
