import {TestBed} from '@angular/core/testing';

import {MedicosService} from './medicos.service';
import {of} from 'rxjs';
import {ApiService} from './api.service';
import {Medico} from '../models/medico';
import {ApiServiceMock} from '../../test/ApiServiceMocks';

describe('MedicosService', () => {
  let service: MedicosService;
  let api: ApiService;

  const medicosMock: Medico[] = [{
    id: '1',
    nombre: 'Mark',
    titulo: 'Médico General'
  }, {
    id: '2',
    nombre: 'Lenn',
    titulo: 'Médico Cirujano'
  }];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ApiService, useClass: ApiServiceMock}]
    });
    service = TestBed.get(MedicosService);
    api = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe almacenar los medicos consultados', async () => {
    // Arrange
    spyOn(api, 'obtenerMedicos').and.returnValue(of(medicosMock));
    // Act
    // tslint:disable-next-line:no-string-literal
    const medicosFromPromise = await service['obtenerMedicos']();
    const medicos = service.medicos;
    // Assert
    expect(medicosFromPromise).toEqual(medicosMock);
    expect(medicos).toEqual(medicosMock);
  });

  it('debe agregar un medico despues de creado', async () => {
    // Arrange
    const medicoMock = medicosMock[0];
    // Act
    await service.agregarMedico(medicoMock);
    const medico = service.medicos[service.medicos.length - 1];
    // Assert
    expect(medico).toEqual(medicoMock);
  });

  it('debe eliminar un medico despues de eliminado en la api', async () => {
    // Arrange
    const medicoMock = medicosMock[0];
    const obtenerMedicosSpy = spyOn(api, 'obtenerMedicos').and.returnValue(of(medicoMock));
    // Act
    // tslint:disable-next-line:no-string-literal
    await service.agregarMedico(medicoMock);
    await service.eliminarMedico(medicoMock);
    // Assert
    expect(obtenerMedicosSpy).toHaveBeenCalled();
  });
});
