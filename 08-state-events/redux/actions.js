export const aumentarMarcardor = {
    type: 'AUMENTAR_MARCADOR',
};

export const aumentarMarcardorAction = (equipo) => ({
    ...aumentarMarcardor,
    equipo,
});

export const disminuirMarcardor = {
    type: 'DISMINUIR_MARCADOR',
};

export const disminuirMarcardorAction = (equipo) => ({
    ...disminuirMarcardor,
    equipo,
});
