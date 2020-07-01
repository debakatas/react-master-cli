import React from 'react';
import Tree from './Tree';

const Trees = (props) => (
    <main>
        <ul>
            {/*
                Tenemos que crear varios Tree
                y pasarle los props que necesiten
             */}
            {props.trees.map((tree) => (
                <Tree
                    asesinoDeArboles={props.matarArbolito}
                    deleteTree={props.deleteTree}
                    key={tree.name}
                    {...tree}
                ></Tree>
            ))}
        </ul>
    </main>
);

export default Trees;
