import React, { Component } from 'react';
import plants from '../data/seed';
import { pseudoFetch } from '../../__config/utils';

class Form extends Component {
    // Necesitaremos estado para guardar que se escribe
    state = {
        nombre: '',
        error: false,
    };

    createNewTree = (event) => {
        // No queremos que se recargue la pagina
        event.preventDefault();
        this.setState({ error: false });
        // Hacemos un llamado a un API, nos devolvera varios tipos
        // de plantas, y escogeremos una para la nueva planta
        pseudoFetch(plants)
            .then((response) => response.json())
            .then((data) => {
                const onePlant = data[Math.floor(Math.random() * data.length)];

                // Cuando ya tengamos la info, enviamos info al
                // padre para crear un nuevo arbol
                this.props.createTree(onePlant, this.state.nombre);
            })
            .catch((error) => {
                this.setState({ error: true });
            });
    };

    inputWrite = (event) => {
        // Cada vez que el usuario escriba
        // vamos a guardar esa informaciÃ³n en el estado
        const valor = event.target.value;
        this.setState({ nombre: valor });
    };

    render() {
        return (
            // Lee sobre onSubmit https://developer.mozilla.org/es/docs/Web/API/HTMLFormElement/submit_event
            <form onSubmit={this.createNewTree}>
                <label htmlFor="nuevoArbol">
                    <small>¿Cómo se llama tu Árbol?</small>

                    <div>
                        <input
                            type="text"
                            id="nuevoArbol"
                            placeholder="Matadioxido"
                            onChange={this.inputWrite}
                        />
                        <button type="submit">
                            <img src="/tree.svg" alt="Add new tree" />
                            <span>Nuevo</span>
                        </button>
                    </div>
                </label>
                {/*
                    Esto solo lo debemos mostrar cuando
                    nuestro createNewTree fallÃ©
                */}
                {this.state.error === true && (
                    <span className="form-error">
                        ¡Algo salio mal{' '}
                        <span role="img" aria-label="enojado">
                            😡
                        </span>
                        ¡
                    </span>
                )}
            </form>
        );
    }
}

export default Form;
