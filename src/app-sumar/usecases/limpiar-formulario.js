console.log( 'Limpiar formulario ok!' );

export function limpiarFormulario(
    inputNumero1,
    inputNumero2,
    labelResultado,
    buttonSumar,
    divMensajeError,
    buttonlimpiarFormulario ) {

    console.log('Button limpiar formulario ok!' );

    inputNumero1.value = '';
    inputNumero2.value = '';

    buttonSumar.disabled = false;
    buttonlimpiarFormulario.disabled = true;

    labelResultado.style.display = 'none';

    divMensajeError.innerHTML = '';
    divMensajeError.style.display = 'none';
}
