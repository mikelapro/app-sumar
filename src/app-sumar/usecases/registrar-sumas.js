/**
 * Registra en el local storage la cantidad de sumas que hizo el usuario.
 */
export function registrarSumas() {
    // Lee el valor actual del LS.
    let contadorSumas = localStorage.getItem( 'contador-sumas' );

    // Si en el LS no hay nada, asigna 0 al contador.
    if ( contadorSumas == null ) {
        contadorSumas = 1;
    } else {
        // Si ya hay un valor en el LS, incrementa el contador en 1.
        contadorSumas++;
        //contadorSumas = contadorSumas + 1;
    }

    // Guarda el contador en el LS.
    localStorage.setItem( 'contador-sumas', contadorSumas );
}
