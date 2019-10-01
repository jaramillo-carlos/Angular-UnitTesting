import {TestBed} from '@angular/core/testing';

import {ApiService} from './api.service';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {Medico} from '../models/medico';
import {environment} from '../../environments/environment';

describe('ApiService', () => {
  let httpTestingController: HttpTestingController;
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    // Arrange
    // Act
    // Assert
    expect(service).toBeTruthy();
  });

  it('debe consultar los medicos', () => {
    // Arrange
    const medicosMock: Medico[] = [{
      id: '1',
      nombre: 'Mark',
      titulo: 'Médico General'
    }, {
      id: '2',
      nombre: 'Lenn',
      titulo: 'Médico Cirujano'
    }];
    // Act
    service.obtenerMedicos().subscribe(medicos => {
      // Assert
      expect(medicos.length).toEqual(2);
    });
    // Assert
    const req = httpTestingController.expectOne(`${environment.api}/medicos`);
    expect(req.request.method).toEqual('GET');
    req.flush(medicosMock);
  });

  it('debe crear un medico', () => {
    // Arrange
    const medicoMock: Medico = {
      nombre: 'Mark',
      titulo: 'Médico General'
    };
    // Act
    service.agregarMedico(medicoMock).subscribe(medicoCreado => {
      // Assert
      expect(medicoCreado.id).toEqual('1');
    });
    // Assert
    const req = httpTestingController.expectOne(`${environment.api}/medicos`);
    expect(req.request.method).toEqual('POST');
    medicoMock.id = '1';
    req.flush(medicoMock);
  });

  it('debe eliminar un medico', () => {
    // Arrange
    const medicoMock: Medico = {
      id: '1',
      nombre: 'Mark',
      titulo: 'Médico General'
    };
    // Act
    service.eliminarMedico(medicoMock).subscribe();
    // Assert
    const req = httpTestingController.expectOne(`${environment.api}/medicos/${medicoMock.id}`);
    expect(req.request.method).toEqual('DELETE');
    req.flush(null);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
