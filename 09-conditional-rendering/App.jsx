import React, { Component } from 'react';

import moon from './img/moon.svg';
import sun from './img/sun.svg';

import './style.css';

class App extends Component {
    state = {
        day: false,
    };

    changeTime = () => {
        this.setState((stateAntesDelCambio) => ({
            day: !stateAntesDelCambio.day,
        }));
    };

    render() {
        const { day } = this.state;

        return (
            <main className={day ? 'day' : 'night'}>
                <label className="toggle" htmlFor="dabox">
                    <input
                        type="checkbox"
                        id="dabox"
                        onChange={this.changeTime}
                        checked={day}
                    />
                    <span className="slider" />
                </label>

                <img src={day ? sun : moon} alt="Sun" />

                {!day && <h2>zZzZzZz...</h2>}
            </main>
        );
    }
}

export default App;
