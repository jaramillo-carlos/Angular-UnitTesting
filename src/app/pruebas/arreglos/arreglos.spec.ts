import {obtenerRobots} from './arreglos';

describe('pruebas de arreglos', () => {
    it('Debe retornar 3 robots', () => {
        // Arrange
        // Act
        const res = obtenerRobots();
        // Assert
        expect(res.length).toBeGreaterThanOrEqual(3);

    });

    it('Debe existir Walle, Sophia y Megaman', () => {
        // Arrange
        // Act
        const res = obtenerRobots();
        // Assert
        expect(res).toContain('Walle');
        expect(res).toContain('Megaman');
        expect(res).toContain('Sophia');
    });
});
