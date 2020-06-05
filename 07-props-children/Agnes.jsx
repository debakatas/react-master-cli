import React from 'react';
import Tronte from './Tronte';

const Agnes = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/agnes.png" alt="Agnes" />
                    <figcaption>Agnes {deep}</figcaption>
                </figure>
            </li>
            <Tronte deep={deep + 1} />
        </>
    );
};

export default Agnes;
