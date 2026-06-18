const { crearGrupos } = require('../app');

describe('Lógica de Sorteo de Equipos', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('Debe dividir una lista de 6 amigos en 3 grupos de 2 integrantes', () => {
        const listaAmigos = ['Juan', 'Pedro', 'Ana', 'Maria', 'Carlos', 'Lucia'];
        const tamañoEquipo = 2;

        jest.spyOn(Math, 'random').mockReturnValue(0);

        const resultado = crearGrupos(tamañoEquipo, listaAmigos);

        expect(resultado).toEqual([
            ['Pedro', 'Ana'],
            ['Maria', 'Carlos'],
            ['Lucia', 'Juan']
        ]);
        expect(resultado).toHaveLength(3);
        expect(resultado.every((grupo) => grupo.length === 2)).toBe(true);
    });
});