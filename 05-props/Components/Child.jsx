import React from 'react';

const Child = (props) => (
    <p>
        In child: {props.content} {props.email} {props.name} {props.password}
    </p>
);

export default Child;
