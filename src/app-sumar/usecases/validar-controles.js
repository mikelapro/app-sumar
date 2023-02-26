console.log( 'Validar ok!' );

export function validarControles( numero1, numero2, divMensajeError ) {
    if ( isNaN( numero1 ) || numero1.trim() == '' || numero1 == null || numero1 == undefined ) {
        divMensajeError.innerText = 'El primer número debe ser un número válido.';
        divMensajeError.style.display = 'block';

        return false;
    }

    if ( isNaN( numero2 ) || numero2.trim() == '' || numero2 == null || numero2 == undefined ) {
        divMensajeError.innerText = 'El segundo número debe ser un número válido.';
        divMensajeError.style.display = 'block';

        return false;
    }

    return true;
}
