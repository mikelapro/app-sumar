import { checkApp, sumar, limpiarFormulario } from './usecases/index.js';

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
    sumar();

});

buttonlimpiarFormulario.addEventListener('click', () => {
    limpiarFormulario();

});
