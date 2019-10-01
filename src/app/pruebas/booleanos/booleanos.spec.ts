import {toggle} from './booleanos';

describe('Pruebas de booleanos', () => {
    it('Debe retornar true', () => {
        // Arrange
        // Act
        const resp = toggle(false);
        // Assert
        expect(resp).toBeTruthy();
    });
});
