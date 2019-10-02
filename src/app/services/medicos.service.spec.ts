import {TestBed} from '@angular/core/testing';

import {MedicosService} from './medicos.service';
import {ApiService} from './api.service';
import {ApiServiceMock} from '../../test/ApiServiceMocks';

describe('MedicosService', () => {
  let service: MedicosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{provide: ApiService, useClass: ApiServiceMock}]
    });
    service = TestBed.get(MedicosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('debe almacenar los medicos consultados', () => {
    // Arrange
    // spyOn<any>(service, 'lo')
    // service.medicos;
  });
});
