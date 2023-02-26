import { defineConfig } from 'vite';
export default defineConfig( {
    base: '/app-sumar/', // Para que funcione en github pages. /js-vite-blackjack/ es el nombre del repo.
    build: {
        outDir: './docs' // Se modifica de ./dist a ./docs para que funcione en github pages. 
    }
} );
