import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import NavBar from './NavBar';
import SpaceX from './SpaceX';
import Nasa from './Nasa';
import RosCosmos from './RosCosmos';
import Home from './Home';

const App = () => (
    <HashRouter>
        <div className="app">
            <NavBar />

            <main>
                <Switch>
                    <Route
                        component={(props) => <Home holi="1" {...props} />}
                        path="/"
                        exact
                    />
                    {/* <Route
                        component={Agencias}
                        path="/agencia/:nombreAgencia"
                    /> */}
                </Switch>
            </main>
        </div>
    </HashRouter>
);

export default App;
