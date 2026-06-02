// tests/logica.test.js

// Aislamos la lógica pura de tu app.js para la prueba automatizada
function crearGruposTest(amigosMock, size) {
    const copia = [...amigosMock];
    
    // Algoritmo de Fisher-Yates (copiado de tu app.js)
    for (let i = copia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copia[i], copia[j]] = [copia[j], copia[i]];
    }

    const grupos = [];
    for (let i = 0; i < copia.length; i += size) {
        grupos.push(copia.slice(i, i + size));
    }
    return grupos;
}

// Prueba automatizada con Jest
describe('Lógica de Sorteo de Equipos', () => {
    test('Debe dividir una lista de 6 amigos en 3 grupos de 2 integrantes', () => {
        const listaAmigos = ['Juan', 'Pedro', 'Ana', 'Maria', 'Carlos', 'Lucia'];
        const tamañoEquipo = 2;
        
        const resultado = crearGruposTest(listaAmigos, tamañoEquipo);
        
        // Verificaciones (Assertions)
        expect(resultado.length).toBe(3); // Deben formarse 3 grupos
        expect(resultado[0].length).toBe(2); // El primer grupo debe tener 2 personas
        expect(resultado[1].length).toBe(2); // El segundo grupo debe tener 2 personas
        expect(resultado[2].length).toBe(2); // El tercer grupo debe tener 2 personas
    });
});