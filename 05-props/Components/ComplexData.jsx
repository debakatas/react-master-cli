import React from 'react';
import Persona from '../Persona';

const Personas = (props) => (
    <ul>
        {props.list.map((persona) => (
            <Persona
                name={persona.name}
                edad={persona.edad}
                operation={props.operation}
            />
        ))}
    </ul>
);

export default Personas;
