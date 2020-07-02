import React from 'react';
import { connect } from 'react-redux';
import Mikkel from './Mikkel';
import { actionAumentarCuenta } from './redux/actions';

const Ulrich = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/ulrich.png" alt="Ulrich" />
                    <figcaption>Ulrich {deep}</figcaption>
                </figure>
                <button
                    style={{ fontSize: '3rem' }}
                    type="button"
                    onClick={props.cambiadorMagicoDeCuenta}
                >
                    Cambiame! {props.contador}
                </button>
            </li>
            <Mikkel deep={deep + 1} />
        </>
    );
};

const mapStateToProps = (state) => ({
    contador: state.contador,
});
const mapDispatchToProps = {
    cambiadorMagicoDeCuenta: actionAumentarCuenta,
};

export default connect(mapStateToProps, mapDispatchToProps)(Ulrich);
