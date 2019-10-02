import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CreacionComponent} from './creacion.component';
import {FormsModule} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {MedicosService} from '../../../services/medicos.service';

describe('CreacionComponent', () => {
  let component: CreacionComponent;
  let fixture: ComponentFixture<CreacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreacionComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('no debe guardar el medico cuando no tiene nombre o titulo', () => {
    // Arrange
    const medicosSVC = TestBed.get(MedicosService);
    const agregarMedicoSpy = spyOn(medicosSVC, 'agregarMedico');
    const alertSpy = spyOn(window, 'alert');
    // Act
    component.agregarMedico();
    // Assert
    expect(alertSpy).toHaveBeenCalledWith('Campos incompletos');
    expect(agregarMedicoSpy).toHaveBeenCalledTimes(0);
  });

  it('debe agregar un medico', () => {
    // Arrange
    component.medico.nombre = 'Juan';
    component.medico.titulo = 'Médico General';
    const medicosSVC = TestBed.get(MedicosService);
    const agregarMedicoSpy = spyOn(medicosSVC, 'agregarMedico').and.returnValue(Promise.resolve(medicosSVC));
    const alertSpy = spyOn(window, 'alert');
    // Act
    component.agregarMedico();
    // Assert
    expect(agregarMedicoSpy).toHaveBeenCalledWith(component.medico);
    expect(alertSpy).toHaveBeenCalledTimes(0);
  });

  it('debe llamar la funcion agregarMedico cuando se presione agregar', () => {
    // Arrange
    component.medico.titulo = 'Título';
    component.medico.nombre = 'Nombre';
    const compiled = fixture.debugElement.nativeElement;
    const agregarMedicoSpy = spyOn(component, 'agregarMedico');
    fixture.detectChanges();
    // Act
    compiled.querySelector('button[type="submit"]').click();
    // Assert
    expect(agregarMedicoSpy).toHaveBeenCalled();
  });
});
