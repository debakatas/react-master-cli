import React from 'react';

import Movie from './Movie';
import movies from '../data/movies';

const App = () => (
    <main>
        <h1>Time Travel Movies</h1>
        <ul>
            {movies.map((movie) => (
                <Movie
                    cover={movie.cover}
                    description={movie.description}
                    key={movie.name}
                    name={movie.name}
                    score={movie.score}
                    year={movie.year}
                />
            ))}
        </ul>
    </main>
);

export default App;
