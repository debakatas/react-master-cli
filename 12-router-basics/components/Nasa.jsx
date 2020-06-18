import React from 'react';
import { Switch, Route } from 'react-router-dom';

const NASA = ({ match }) => (
    <article>
        <figure>
            <Switch>
                <Route
                    path="/agenciaespacial/algo"
                    component={() => <div>dentro de</div>}
                />
            </Switch>
            <figcaption>
                <h2>{match.params.nicknameUsuario}</h2>
                <p>
                    The National Aeronautics and Space Administration (NASA;
                    /ˈnæsə/) is an independent agency of the United States
                    Federal Government responsible for the civilian space
                    program, as well as aeronautics and space research.
                </p>
                <p>
                    NASA was established in 1958, succeeding the National
                    Advisory Committee for Aeronautics (NACA). The new agency
                    was to have a distinctly civilian orientation, encouraging
                    peaceful applications in space science. Since its
                    establishment, most US space exploration efforts have been
                    led by NASA, including the Apollo Moon landing missions, the
                    Skylab space station, and later the Space Shuttle.
                </p>
            </figcaption>
            <img src="/nasa-rocket.png" alt="Discovery" />
        </figure>
    </article>
);

export default NASA;
