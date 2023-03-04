console.log( 'Sumar ok!' );

export function sumar( numero1, numero2 ) {
    console.log( 'Button sumar ok!' );

    // Convierte de string a numero con decimales.
    numero1 = parseFloat( numero1 );
    numero2 = parseFloat( numero2 );

    let resultado = numero1 + numero2;

    return resultado;
}
