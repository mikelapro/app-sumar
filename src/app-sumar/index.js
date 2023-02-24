import { checkApp, sumar, limpiarFormulario, validarControles } from './usecases/index.js';

checkApp();

// Referencias del HTML.
const buttonSumar = document.querySelector('#button-sumar');
const buttonlimpiarFormulario = document.querySelector('#button-limpiar-formulario');
const inputNumero1 = document.querySelector('#input-numero1');
const inputNumero2 = document.querySelector('#input-numero2');
const divMensajeError = document.querySelector('#mensaje-error');
const labelResultado = document.querySelector('#label-resultado');


// Eventos.
buttonSumar.addEventListener('click', () => {
    let valorNumero1 = inputNumero1.value; 
    let valorNumero2 = inputNumero2.value;

    if ( validarControles( valorNumero1, valorNumero2, divMensajeError ) == true ) {
        // Controles ok.
        let resultado = sumar( valorNumero1, valorNumero2 );
        
        labelResultado.innerText = resultado;
        labelResultado.style.display = 'block';
        divMensajeError.style.display = 'none';
        buttonSumar.disabled = true;
        buttonlimpiarFormulario.disabled = false;
        
    } else{
        
    }
});

buttonlimpiarFormulario.addEventListener('click', () => {
    limpiarFormulario( 
        inputNumero1,   
        inputNumero2, 
        labelResultado, 
        buttonSumar, 
        divMensajeError, 
        buttonlimpiarFormulario );
    
});
