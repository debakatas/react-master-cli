import React from 'react';

const Jonas = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/jonas.png" alt="Jonas" />
                    <figcaption>Jonas {deep}</figcaption>
                </figure>
            </li>
        </>
    );
};

export default Jonas;
