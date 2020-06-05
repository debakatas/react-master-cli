import React from 'react';
import Ulrich from './Ulrich';

const Tronte = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/tronte.png" alt="Tronte" />
                    <figcaption>Tronte {deep}</figcaption>
                </figure>
            </li>
            <Ulrich deep={deep + 1} />
        </>
    );
};

export default Tronte;
