import {Jugador} from './jugador';

describe('Prueba de clases', () => {

    let jugador: Jugador;

    beforeEach(() => {
        jugador = new Jugador();
    });

    it('Debe retornar 0 de vida cuando recibe un dano mayor a 100', () => {
        // Arrange
        // Act
        const resp = jugador.recibeDano(110);
        // Assert
        expect(resp).toBe(0);
    });

    it('Debe inicializarce un jugador con 100 de vida', () => {
        // Arrange
        // Act
        const resp = jugador.vida;
        // Assert
        expect(resp).toBe(100);
    });

    it('Debe retornar 80 de vida si recibe 20 de dano', () => {
        // Arrange
        // Act
        const resp = jugador.recibeDano(20);
        // Assert
        expect(resp).toBe(80);
    });

    it('Debe retornar 50 de vida si recibe 50 de dano', () => {
        // Arrange
        // Act
        const resp = jugador.recibeDano(50);
        // Assert
        expect(resp).toBe(50);
    });
});
