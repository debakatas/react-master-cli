import React, { Component } from 'react';

class Tree extends Component {
    state = {};

    componentWillUnmount() {
        // Aqui informamos al App que vamos a ser borrados :(
        this.props.asesinoDeArboles(this.props.name);
    }

    render() {
        return (
            <li>
                {/* Aqui tendremos que borrar el elemento */}
                <button
                    type="button"
                    onClick={() => this.props.deleteTree(this.props.name)}
                >
                    <img src="/trash.svg" alt="Delete tree" />
                </button>

                <figure>
                    <img src="/tree.svg" alt="Tomate Ipereum" />
                    <figcaption>
                        <h2>
                            {this.props.name}
                            <a
                                href="https://www.google.com/maps/@4.6564875,-74.0652613,15z"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <img
                                    src="/link.svg"
                                    alt="See Plantman location in Google Maps"
                                />
                            </a>
                        </h2>
                        <h3>
                            <a
                                href={this.props.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                {this.props.kind}
                            </a>
                        </h3>
                        <small>Via Mozilla el 13 de junio a las 8:11PM</small>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default Tree;
