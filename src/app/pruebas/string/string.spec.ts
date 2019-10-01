import {mensaje} from './string';

describe('Pruebas de Strings', () => {
    it('Debe de regresar un string', () => {
        // Arrange
        // Act
        const resp = mensaje('Carlos');
        // Assert
        expect(typeof resp).toBe('string');

    });

    it('Debe contener un saludo al nombre', () => {
        // Arrange
        const nombre = 'Carlos';
        // Act
        const resp = mensaje(nombre);
        // Assert
        expect(resp).toContain(nombre);
    });


});
