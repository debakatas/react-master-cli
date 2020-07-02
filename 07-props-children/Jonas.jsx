import React from 'react';
import { connect } from 'react-redux';
import { actionAumentarCuenta } from './redux/actions';

const Jonas = (props) => {
    const deep = props.deep || 0;

    return (
        <>
            <li>
                <figure>
                    <img src="/jonas.png" alt="Jonas" />
                    <figcaption>Jonas {deep}</figcaption>
                    <button
                        style={{ fontSize: '3rem' }}
                        type="button"
                        onClick={() => props.cambiarCuenta('salvaje')}
                    >
                        Cambiame! {props.contador}
                    </button>
                </figure>
            </li>
        </>
    );
};

const mapStateToProps = (state) => ({
    contador: state.contador,
});
const mapDispatchToProps = {
    cambiarCuenta: actionAumentarCuenta,
};

export default connect(mapStateToProps, mapDispatchToProps)(Jonas);
