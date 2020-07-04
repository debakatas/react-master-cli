import React, { Component } from 'react';
import './style.css';
import { connect } from 'react-redux';
import {
    aumentarMarcardorAction,
    disminuirMarcardorAction,
} from './redux/actions';

class App extends Component {
    render() {
        return (
            <dl>
                <div className="corinthians">
                    <dd>{this.props.corinthians}</dd>
                    <dt>Corinthians</dt>
                    <button
                        type="button"
                        onClick={() => this.props.menosMarcador('corinthians')}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => this.props.masMarcador('corinthians')}
                    >
                        +
                    </button>
                </div>
                <img src="/ball.png" alt="soccer ball" />
                <div className="santos">
                    <dd>{this.props.santos}</dd>
                    <dt>Santos FC</dt>
                    <button
                        type="button"
                        onClick={() => this.props.menosMarcador('santos')}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => this.props.masMarcador('santos')}
                    >
                        +
                    </button>
                </div>
            </dl>
        );
    }
}

const mapStateToProps = (state) => state;
const mapDispatchToProps = {
    masMarcador: aumentarMarcardorAction,
    menosMarcador: disminuirMarcardorAction,
};

// Esto es lo que significa
const fn = connect(mapStateToProps, mapDispatchToProps);
const NuevoComponent = fn(App);
export default NuevoComponent;

// Esto es como se suele usar
// export default connect(mapStateToProps, mapDispatchToProps)(App);
