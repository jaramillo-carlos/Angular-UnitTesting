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
    // expect(sessionStorage.getItem(key)).toEqual(value);
    expect(await service.get(key)).toEqual(value);
  });

  it('debe guardar un valor, usando callback', (done) => {
    // Arrange
    const key = 'key2';
    const value = 'value2';
    // Act
    service.save(key, value)
      .then(() => {
        // Assert
        /*
        const currentValue = sessionStorage.getItem(key);
        expect(currentValue).toEqual(value);
        done();
        */
        service.get(key).then((resolve) => {
          expect(resolve).toEqual(value);
          done();
        });
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
});
