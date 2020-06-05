import React from 'react';
import Jonas from './Jonas';

const Mikkel = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/mikkel.png" alt="Mikkel" />
                    <figcaption>Mikkel {deep}</figcaption>
                </figure>
            </li>
            <Jonas deep={deep + 1} />
        </>
    );
};

export default Mikkel;
