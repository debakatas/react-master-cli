import React from 'react';
import { getTime } from '../formatTime';

const CutTree = (props) => (
    <footer>
        <p>
            <small>Último arbol cortado:</small>
            <span>
                <em>{props.name}</em> a las {getTime(props.time)}
            </span>
        </p>
    </footer>
);

export default CutTree;
