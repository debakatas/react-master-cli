import React from 'react';
import './style.css';

const App = () => {
    const date = new Date();
    const time = `${date.getHours()}:${date.getMinutes()}`;

    return (
        <main>
            <div className="container">
                <h2>Time is</h2>
                <h1>{time}</h1>
            </div>
        </main>
    );
};

export default App;
