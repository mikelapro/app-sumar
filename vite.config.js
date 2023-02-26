import { defineConfig } from 'vite';
export default defineConfig( {
    base: '/app-sumar/',
    build: {
        outDir: './docs' // Se modifica de ./dist a ./docs para que funcione en github pages. 
    }
} );
