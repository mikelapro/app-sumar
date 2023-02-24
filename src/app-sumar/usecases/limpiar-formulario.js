console.log('Limpiar formulario ok!');

export function limpiarFormulario( inputNumero1, inputNumero2, labelResultado, buttonSumar, divMensajeError ) {
    console.log('Button limpiar formulario ok!');

    inputNumero1.value = '';
    inputNumero2.value = '';

    labelResultado.style.display = 'none';

    buttonSumar.disabled = false;

    // divMensajeError.innerHTML = '';
    // divMensajeError.style.display = 'none';
    
}
