/**
 * Esta función devuelve el valor de la carta en el juego Blackjack
 * @param {String} carta 
 * @returns 
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}

// export default valorCarta;