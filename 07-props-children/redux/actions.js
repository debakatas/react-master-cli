export const aumentarCuenta = {
    type: 'AUMENTAR_CUENTA_BONITA',
};

export const actionAumentarCuenta = () => {
    console.log('me dispararon');
    return aumentarCuenta;
};
