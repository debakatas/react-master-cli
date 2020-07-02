export const aumentarCuenta = {
    type: 'AUMENTAR_CUENTA_BONITA',
};

export const actionAumentarCuenta = (equipo) => {
    console.log('me dispararon');
    return {
        ...aumentarCuenta,
        equipo,
    };
};
