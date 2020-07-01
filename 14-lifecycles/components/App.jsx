import React, { Component } from 'react';

import { pseudoFetch } from '../../__config/utils';
import CutTree from './CutTree';
import Form from './Form';
import Header from './Header';
import Trees from './Trees';

class App extends Component {
    constructor(props) {
        super(props);
        // Debemos iniciar el estado con el localStorage si existe
        this.state = {
            cutTree: {
                name: 'PenPen',
                time: 1592869197784,
            },
            trees: [],
            ready: false,
        };
    }

    //
    componentDidMount() {
        const stateString = localStorage.getItem('state');
        const stateObject = JSON.parse(stateString);
        this.setState(stateObject);
    }

    componentDidUpdate() {
        // Aqui podemos cada que haya cambios los guardemos en el localstorage
        localStorage.setItem('state', JSON.stringify(this.state));
    }

    createTree = (planta, nombre) => {
        // Crea un arbol, ¿como lo harías?
        this.setState((prevState) => {
            const copyTrees = [...prevState.trees];
            copyTrees.push({
                name: nombre,
                link: planta.link,
                kind: planta.name,
            });
            return {
                trees: copyTrees,
            };
        });
    };

    deleteTree = (name) => {
        // Borra un arbol, ¿como lo harías?
        this.setState((prevState) => {
            const copy = [...prevState.trees];
            const copyMinusCurrent = copy.filter((tree) => tree.name !== name);
            return {
                trees: copyMinusCurrent,
            };
        });
    };

    showCutTree = (name) => {
        this.setState({
            cutTree: {
                name,
                time: new Date(),
            },
        });
    };

    render() {
        return (
            <>
                <Header />

                <Form trees={this.state.trees} createTree={this.createTree} />
                <Trees
                    trees={this.state.trees}
                    deleteTree={this.deleteTree}
                    matarArbolito={this.showCutTree}
                />

                {/*
                    Solo se debería mostrar si
                    hay algún arbol que haya sido eliminado
                */}
                <CutTree
                    name={this.state.cutTree.name}
                    time={this.state.cutTree.time}
                />
            </>
        );
    }
}

export default App;
