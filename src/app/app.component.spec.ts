import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {MedicosComponent} from './components/medicos/medicos.component';
import {CreacionComponent} from './components/medicos/creacion/creacion.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, MedicosComponent, CreacionComponent],
      imports: [FormsModule, HttpClientTestingModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe mostrar un titulo', () => {
    // Arrange
    component.title = 'Angular Unit Test';
    const compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges();
    // Act
    // Assert
    const title = compiled.querySelector('h1').textContent;
    expect(title).toContain('Angular Unit Test');
  });
});
