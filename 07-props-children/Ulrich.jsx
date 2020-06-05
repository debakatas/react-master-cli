import React from 'react';
import Mikkel from './Mikkel';

const Ulrich = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/ulrich.png" alt="Ulrich" />
                    <figcaption>Ulrich {deep}</figcaption>
                </figure>
            </li>
            <Mikkel deep={deep + 1} />
        </>
    );
};

export default Ulrich;
