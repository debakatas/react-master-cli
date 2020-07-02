import { aumentarCuenta } from './actions';

const initialState = {
    contador: 0,
    holi: '1',
    comor: [1, 2, 3, 4, 5],
    test: { a: [1, 2, 3, 4, 4] },
};

const reductorGeneral = (state = initialState, action) => {
    switch (action.type) {
        case aumentarCuenta.type: {
            console.log(action.equipo);

            return {
                ...state,
                contador: state.contador + 1,
            };
        }

        default: {
            return state;
        }
    }
};

export default reductorGeneral;
