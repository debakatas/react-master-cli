import React from 'react';
import agenciasEspaciales from '../data';

const Agency = ({ match }) => {
    const { name, desc, rocket } = agenciasEspaciales.find(
        (agenciaEspacial) =>
            agenciaEspacial.route === match.params.nombreAgencia
    );

    return (
        <article>
            <figure>
                <figcaption>
                    <h2>{name}</h2>
                    {desc.map((parrafo) => (
                        <p>{parrafo}</p>
                    ))}
                </figcaption>
                <img src={rocket.src} alt={rocket.alt} />
            </figure>
        </article>
    );
};

export default Agency;
