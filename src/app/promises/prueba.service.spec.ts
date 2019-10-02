import {TestBed} from '@angular/core/testing';

import {PruebaService} from './prueba.service';

describe('PruebaService', () => {
  let service: PruebaService;

  beforeEach(() => {
    sessionStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.get(PruebaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe guardar un valor, usando async', async () => {
    // Arrange
    const key = 'key';
    const value = 'value';
    // Act
    await service.save(key, value);
    // Assert
    expect(sessionStorage.getItem(key)).toEqual(value);
  });

  it('debe guardar un valor, usando callback', (done) => {
    // Arrange
    const key = 'key2';
    const value = 'value2';
    // Act
    service.save(key, value)
      .then(() => {
        // Assert
        const currentValue = sessionStorage.getItem(key);
        expect(currentValue).toEqual(value);
        done();
      });
  });

  it('debe obtener un valor', async () => {
    // Arrange
    const key = 'key3';
    const value = 'value3';
    sessionStorage.setItem(key, value);
    // Act
    const currentValue = await service.get(key);
    // Assert
    expect(currentValue).toEqual(value);
  });

  it('debe rechazar la promesa cuando ocurra una excepción', (done) => {
    // Arrange
    const key = 'key3';
    spyOn(sessionStorage, 'getItem').and.throwError('key not found');
    // Act
    service.get(key).catch((err) => {
      // Assert
      expect(err).toEqual(new Error('key not found'));
      done();
    });
  });

  it('debe rechazar la promesa cuando ocurra una excepción guardando', (done) => {
    // Arrange
    const key = 'key4';
    const value = 'value4';
    spyOn(sessionStorage, 'setItem').and.throwError('storage is full');
    // Act
    service.save(key, value).catch((err) => {
      // Assert
      expect(err).toEqual(new Error('storage is full'));
      done();
    });
  });
});
