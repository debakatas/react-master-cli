import { disminuirMarcardor, aumentarMarcardor } from './actions';

const initialState = {
    corinthians: 0,
    santos: 0,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case disminuirMarcardor.type:
            return {
                ...state,
                [action.equipo]: state[action.equipo] - 1,
            };

        case aumentarMarcardor.type:
            return {
                ...state,
                [action.equipo]: state[action.equipo] + 1,
            };

        default:
            return state;
    }
};

export default reducer;
