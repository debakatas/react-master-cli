import React from 'react';

const Persona = (props) => (
    <li>
        Soy {props.name} y la mitad de mi edad es {props.operation(props.edad)}
    </li>
);

export default Persona;
